import React from 'react';
import Header from './Header';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './AppComponents/Home';
import Browse from './AppComponents/Browse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], selected: "", title: "" };
  }
  async componentDidMount() {
    if (localStorage.getItem("Movies") != null) {
      console.log("Retrieving data from LocalStorage")
      this.setState({ movies: JSON.parse(localStorage.getItem("Movies")) });
    }
    else {
      console.log("Retrieving data from API")
      try {
        const url = "http://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL";
        const response = await fetch(url);
        const jsonData = await response.json();
        this.setState({ movies: jsonData });
        localStorage.setItem("Movies", JSON.stringify(jsonData));
      }
      catch (error) {
        console.error(error);
      }
    }
    document.getElementById("loading").className = "modal";
  }
  getTitle = (title) => {
    this.setState({ title: title });
  }
  render() {
    return (
      <main className="hero is-fullheight has-background-white-ter">
        <Header></Header>
        <Route path='/' exact render={() => <Home getTitle={this.getTitle} />} />
        <Route path='/home' exact render={() => <Home getTitle={this.getTitle} />} />
        <Route path='/browse' exact render={(props) => <Browse movies={this.state.movies} title={this.state.title} />} />
        <div id="loading" className="modal is-active">
          <div className="modal-background" onClick={this.modalHandler}></div>
          <div className="modal-content" onClick={this.modalHandler}>
            <progress id="progress" class="progress is-large is-info" max="100">60%</progress>
          </div>
        </div>
      </main >
    );
  }
}

export default App;
