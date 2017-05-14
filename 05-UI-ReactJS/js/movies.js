class Movie{  
  constructor(title, year, duration){
    this.title = title
    this.year = year
    this.duration = duration
  }
}

class MovieElement extends React.Component {
   render() {
     return (
        <span>Title: {this.props.title}   Duration: {this.props.duration}   Year: {this.props.year} </span>
      )
    }
 }

class MovieApp extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      title: '',
      year: '',
      duration: '',

      movieList : []      
    }  

    this.titleOnChange = this.titleOnChange.bind(this)
    this.yearOnChange = this.yearOnChange.bind(this)
    this.durationOnChange = this.durationOnChange.bind(this)
    this.addMovieToList = this.addMovieToList.bind(this)
    this.editMovie = this.editMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    
  }

  titleOnChange(event){
    this.setState({
      title: event.target.value
    })
  }

  yearOnChange(event){
    this.setState({
      year: event.target.value
    })
  }

  durationOnChange (event){
    this.setState({
      duration: event.target.value
    })
  }

  submitOnChange(event){

  }

  addMovieToList(event){
    event.preventDefault()
    let movie = new Movie(this.state.title,this.state.year,this.state.duration)
    this.state.movieList.push(movie)
    this.setState  ({
      movieList: this.state.movieList
    })
  }

  editMovie(){

  }

  deleteMovie(index){
    this.state.movieList.splice(index,1)
    this.setState({
      movieList: this.state.movieList
    })
    alert("Movie erased")
  }
      
  render () {
    return(
      <section className="movieApp">        
        <div>
          <form className ="addMovieForm" onSubmit = {this.addMovieToList}>
            <span> Title </span><input id = "title" type ='text' onChange={this.titleOnChange} value={this.state.title}/>
            <span> Year </span><input id = "year" type ='number' onChange={this.yearOnChange} value={this.state.year}/>
            <span> Duration </span><input id = "duration" type ='number' onChange={this.durationOnChange} value={this.state.duration}/>
            <input type="Submit" value = "Add movie" onChange={this.submitOnChange}/>
          </form>
        </div>
        <div>
          <ul>
            {this.state.movieList.map((movie, index) => {
              return (
                <li>
                <MovieElement key={index} title={movie.title} year={movie.year} duration={movie.duration}/>
                <button onClick={()=> this.editMovie}>Edit</button>
                <button onClick={()=> this.deleteMovie(index)}>Remove</button>
                </li>
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