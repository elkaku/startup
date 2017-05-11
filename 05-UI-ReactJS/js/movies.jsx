class Movie{
  
  constructor(title, year, duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
}

/*----------------REACT----------------------*/

class MovieApp extends ReactDOM.Component{

  constructor(){
    super()
    this.state = {
      movieList: []
    }
  }
  
  render(){
    return(
      <h1>Hello {this.props.movieList}</h1>
    );
  }
}

  ReactDOM.render( 
        <MovieApp/>,
        document.getElementById('root')
);