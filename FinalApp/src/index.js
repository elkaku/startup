class App extends React.Component { /*Main Class*/
  
  constructor(){
    super();
    this.state={
      screen: 'default'
    }
  }

  render () {
    if(this.state.screen === 'default')
    {
      return(
        <div>
          <input id="name" type="text" placeholder ="Type artist name..."></input>
          <button>Search!</button>
        </div>
      )
    }
    
    if(this.state.screen === 'albums')
    {
      return <Albums />
    }

    if(this.state.screen === 'tracks')
    {
      return <Tracks />
    }
  }
}

/*class ArtistSearch extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    p.then(() => {
      this.setState({
        msg: 'Success'
      })
    })
  }

  render () {
    return (

    )
  }
}*/

class Albums extends React.Component {
  /*https://api.spotify.com/v1/search?q=pantera&type=album*/
  render(){
    return (
      <div>This is the albums page</div>
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