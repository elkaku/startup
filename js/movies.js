/*class Movie{
  
  constructor(title, year, duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
}*/

/*----------------REACT----------------------*/

class MovieApp extends React.Component{

  constructor(){
    super();
    this.state = {
      title : 'Sharknado'
    }
  }
   
  render () {
    return <movieListItems />
  }
}

class movieListItems extends React.Component {

  constructor(){
    super()
    this.state = {}
  }

  render () {
    return (
      <div>Componente 1 </div>
    )
  }
}

ReactDOM.render(<MovieApp />, document.getElementById('root'))