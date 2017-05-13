class MovieElement extends React.Component {
   render() {
     return (
      <div>
        <li>Title: {this.props.title}   Duration: {this.props.duration}   Year: {this.props.year} </li>
        <button onClick={()=> this.props.editMovie(this.props.index)}>Edit</button>
        <button onClick={()=> this.props.deleteMovie(this.props.index)}>Remove</button>
      </div>   
      )
    }
 }

class AddMovie extends React.Component {
  
  constructor(){
    super(),
    this.state = {
      title: '',
      year: '',
      duration: ''
    }

    this.titleOnChange = this.titleOnChange.bind(this)
    this.yearOnChange = this.yearOnChange.bind(this)
    this.durationOnChange = this.durationOnChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(event){
    event.preventDefault();
    let newMovie = new Movie(event.target.title.value, event.target.title.value,event.target.duration.value)
    this.props.addMovieToList(newMovie)
  }

  titleOnChange(){
    let title = this.setState({
      title: event.target.value
    })
  }

  yearOnChange(){
    this.setState({
      year: event.target.value
    })
  }

  durationOnChange (){
    this.setState({
      duration: event.target.value
    })
  }
  
  render (){
    return(
      <form className ="addMovieForm" onSubmit = {this.handleAdd}>
        <span> Title </span><input id = "title" type ='text'onChange={this.titleOnChange}/>
        <span> Year </span><input id = "year" type ='number'onChange={this.yearOnChange}/>
        <span> Duration </span><input id = "duration" type ='number'onChange={this.durationOnChange}/>
        <input type="Submit" value="Add new movie"/>
      </form>
      )
  }
}

class MovieApp extends React.Component{  
  constructor(){    
    super();
    this.state = {
      title:'',
      year:'',
      duration:'',

      movieList : [
      {title:"Chuck norris",year: 1985, duration: 125},
      {title:"Sharknado",year: 2014, duration: 114}, 
      {title:"Twister",year: 2002, duration: 98}
      ]      
    }

    //this.addMovieToList = this.addMovieToList.bind(this)
  }  
  
  handleAddClick() {
    return (<AddMovie/>)
  }

  addMovieToList(movie){
      this.state.movieList.push(movie)
  }

  editMovie(){

  }

  deleteMovie(){
    alert("Movie erased")
  }
      
  render () {
    //console.log(this.state.movieList)
    return(
      <section className="movieApp">        
        <button onClick= {this.handleAddClick}>Add Movie</button>
        <AddMovie/>
        <div>          
          <ul>
            {this.state.movieList.map((movie, index) => {
              return (
                <MovieElement key={index} title={movie.title} year={movie.year} duration={movie.duration}/>
              )
            })}
          </ul>          
        </div>
      </section>      
    )
  }
}

ReactDOM.render( 
  <MovieApp />,
  document.getElementById('root')
);

class Movie{  
  constructor(title, year, duration){
    this.title = title
    this.year = year
    this.duration = duration
  }
}