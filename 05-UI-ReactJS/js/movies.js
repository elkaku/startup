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

      editTitle: '',
      editYear: '',
      editDuration: '',
      editForm: 'none',

      movieList : []      
    } 
    
    this.titleOnChange = this.titleOnChange.bind(this)
    this.yearOnChange = this.yearOnChange.bind(this)
    this.durationOnChange = this.durationOnChange.bind(this)
    this.submitOnChange = this.submitOnChange.bind(this)

    this.titleEditOnChange = this.titleEditOnChange.bind(this)
    this.yearEditOnChange = this.yearEditOnChange.bind(this)
    this.durationEditOnChange = this.durationEditOnChange.bind(this)
    this.submitEditOnChange = this.submitEditOnChange.bind(this)

    this.addMovieToList = this.addMovieToList.bind(this)
    this.editMovie = this.editMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.showEdit = this.showEdit.bind(this)
    
  }
  
  titleEditOnChange(event){
    this.setState({
      editTitle: event.target.value
    })
  }

  yearEditOnChange(event){
    this.setState({
      editYear: event.target.value
    })
  }

  durationEditOnChange (event){
    this.setState({
      editDuration: event.target.value
    })
  }

  submitEditOnChange(event){

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

  editMovie(index){
    let movie = new Movie(this.state.editTitle,this.state.editYear,this.state.editDuration)
    this.state.movieList.splice(index,1,movie)
    this.setState({
      movieList: this.state.movieList
    })
    alert("Movie editted")
  }

  deleteMovie(index){
    this.state.movieList.splice(index,1)
    this.setState({
      movieList: this.state.movieList
    })
    alert("Movie erased")
  } 
  
  showEdit(){
    this.setState({
      editForm: ''
    })
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
                  <button onClick={()=> this.deleteMovie(index)}>Remove</button>
                  <button onClick={this.showEdit}>Edit</button>
                    <div style={{display: this.state.editForm}}>
                      <span> New title </span><input id = "editTitle" type ='text' onChange={this.titleEditOnChange} value={this.state.editTitle}/>
                      <span> New year </span><input id = "editYear" type ='number' onChange={this.yearEditOnChange} value={this.state.editYear}/>
                      <span> New duration </span><input id = "editDuration" type ='number' onChange={this.durationEditOnChange} value={this.state.editDuration}/>
                      <button value = "Edit Movie" onClick={()=>this.editMovie(index)}>Edit movie</button>                      
                    </div>
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