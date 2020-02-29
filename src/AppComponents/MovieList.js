import React from "react";
import SingleMovie from "./SingleMovie";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: this.props.movies, sortedMovies: this.sort(this.props.movies), sort: "title" }
    }
    componentDidUpdate(prevProps) {
        if (this.props.movies !== prevProps.movies) {
            this.setState({ movies: this.props.movies });
            if (this.state.sort == "title") {
                this.setState({ sortedMovies: this.sortMoviesTitle(this.props.movies), sort: "title" })
            }
            if (this.state.sort == "year") {
                this.setState({ sortedMovies: this.sortMoviesYear(this.props.movies), sort: "title" })
            }
            if (this.state.sort == "rating") {
                this.setState({ sortedMovies: this.sortMoviesRating(this.props.movies), sort: "title" })
            }
        }
    }
    handleTitle = () => {
        if (this.state.sort == "title") {
            this.setState({ sortedMovies: this.state.movies.reverse() });
        }
        else {
            this.setState({ sortedMovies: this.sortMoviesTitle(this.props.movies), sort: "title" })
        }

    }
    handleYear = () => {
        if (this.state.sort == "year") {
            this.setState({ sortedMovies: this.state.movies.reverse() });
        }
        else {
            this.setState({ sortedMovies: this.sortMoviesYear(this.props.movies), sort: "year" })
        }

    }
    handleRating = (e) => {
        if (this.state.sort == "rating") {
            this.setState({ sortedMovies: this.state.movies.reverse() });
        }
        else {
            this.setState({ sortedMovies: this.sortMoviesRating(this.props.movies), sort: "rating" })
        }

    }
    sort = (movies) => {
        return movies.sort((a, b) => {
            if (a.title > b.title) return 1;
            if (b.title > a.title) return -1;
            return 0;
        });
    }
    sortMoviesTitle = (movies) => {
        document.getElementById("title").className = "navbar-item pagination-link is-current";
        document.getElementById("year").className = "navbar-item pagination-link";
        document.getElementById("rating").className = "navbar-item pagination-link";
        return movies.sort((a, b) => {
            if (a.title > b.title) return 1;
            if (b.title > a.title) return -1;
            return 0;
        });
    }
    sortMoviesYear = (movies) => {
        document.getElementById("title").className = "navbar-item pagination-link";
        document.getElementById("year").className = "navbar-item pagination-link is-current";
        document.getElementById("rating").className = "navbar-item pagination-link";
        return movies.sort((b, a) => {
            if (a.release_date > b.release_date) return 1;
            if (b.release_date > a.release_date) return -1;
            return 0;
        });
    }
    sortMoviesRating = (movies) => {
        document.getElementById("title").className = "navbar-item pagination-link";
        document.getElementById("year").className = "navbar-item pagination-link";
        document.getElementById("rating").className = "navbar-item pagination-link is-current";
        return movies.sort((b, a) => {
            if (a.ratings.average > b.ratings.average) return 1;
            if (b.ratings.average > a.ratings.average) return -1;
            return 0;
        });
    }
    render() {
        return (
            <div className="tile box is-vertical">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            <h3 className="title">Movie List</h3>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <p id="title" className="pagination-link is-current" onClick={this.handleTitle}>Title</p>
                            <p className="pagination-link" id="year" onClick={this.handleYear}>Year</p>
                            <p className="pagination-link" id="rating" onClick={this.handleRating}>Rating</p>
                        </div>
                    </div>
                </nav>
                <div className="">
                    <table className="table is-narrow is-hoverable is-fullwidth">
                        <tbody>
                            {this.state.sortedMovies.map((m) => <SingleMovie movie={m} setFavorites={this.props.setFavorites} lookupMovie={this.props.lookupMovie} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default MovieList