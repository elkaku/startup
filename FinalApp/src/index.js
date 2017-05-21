class App extends React.Component { /*Main Class*/
  
  constructor(){
    super();
    this.state={
      screen: 'default',
      artistName: ''
    }

    this.clickHandler=this.clickHandler.bind(this)
    this.handleArtistChange=this.handleArtistChange.bind(this)
  }

  clickHandler(e){
    e.preventDefault()    
    this.setState({
      screen: 'albums'
    })
  }

  handleArtistChange(e){
    this.setState({
      artistName : e.target.value
    })
  }

  render () {
    return (this.state.screen === 'default') ?  
        <div>
           <input id="name" onChange={this.handleArtistChange} value={this.state.artistName} type="text" placeholder ="Type artist name..."></input>
          <button onClick={this.clickHandler}>Search!</button>
        </div>
       : this.state.screen === 'albums' ? <Albums name = {this.state.artistName}/> 
       : this.state.screen === 'tracks' ? <Tracks /> 
       : null
  }
}



class Albums extends React.Component {
  /*https://api.spotify.com/v1/search?q=pantera&type=album*/
  
  constructor(props){
    super(props)

    this.state ={
      AlbumsList:[],
      url: "https://api.spotify.com/v1/search?q="+this.props.name+"&type=album"
    }
  }

  makeCall() {

    const promise = new Promise((resolve, reject) =>{ //promise is created
      
      const xhr = new XMLHttpRequest(); //connection object
      
      xhr.onload = function() {
        if (xhr.status == 200) {
          resolve(xhr.responseText); // sets te resolve of the promise to the response text received
        }
        else{
          reject(); //executes reject code
        }
      };

      xhr.onerror = function(){
        reject(); //if connection fails, prints reject code
      };

      xhr.open("GET",this.state.url,true); //uses the config object url
      xhr.send(); //connects

    });

    return promise; //returns the promise
  };

  render(){
    const p = this.makeCall().then (result =>{
      const data = JSON.parse(result);
      console.log(data);
    });

    return (
      <div>
        <h1>These are the albums for {this.props.name}:</h1>
      </div>
    )
  }
}

class Tracks extends React.Component{

  render(){
    return (
      <div>This is the tracks page</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))