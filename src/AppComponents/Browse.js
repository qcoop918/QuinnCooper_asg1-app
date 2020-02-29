import React from "react";
import Filters from "./Filters";
import MovieList from "./MovieList";
import Favorites from "./Favorites";
import Lookup from "./Lookup";

class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sortedMovies: this.props.movies, favoriteList: [], browse: true, lookup: false, movie: "" }
    }
    setFilters = (title, yBefore, yBeforeVal, yAfter, yAfterVal, yBetween, yBetweenVal1, yBetweenVal2,
        rBelow, rBelowVal, rAbove, rAboveVal, rBetween, rBetweenVal1, rBetweenVal2) => {
        title = title.toLowerCase();
        let newMovies = this.props.movies;
        newMovies = newMovies.filter(m => m.title.toLowerCase().includes(title));
        if (yBefore == "true" && isNaN(yBeforeVal) == false) {
            newMovies = newMovies.filter(m => m.release_date < yBeforeVal + "-00-00");
        }
        else if (yAfter == "true" && isNaN(yAfterVal) == false) {
            newMovies = newMovies.filter(m => m.release_date > yAfterVal + "-00-00");
        }
        else if (yBetween == "true" && isNaN(yBetweenVal1) == false && isNaN(yBetweenVal2) == false) {
            newMovies = newMovies.filter(m => m.release_date > yBetweenVal1 + "-00-00" && m.release_date < yBetweenVal2 + "-00-00");
        }
        if (rBelow == "true" && isNaN(rBelowVal) == false) {
            newMovies = newMovies.filter(m => m.ratings.average < rBelowVal);
        }
        else if (rAbove == "true" && isNaN(rAboveVal) == false) {
            newMovies = newMovies.filter(m => m.ratings.average > rAboveVal);
        }
        else if (rBetween == "true" && isNaN(rBetweenVal1) == false && isNaN(rBetweenVal2) == false) {
            newMovies = newMovies.filter(m => m.ratings.average > rBetweenVal1 && m.ratings.average < rBetweenVal2);
        }
        this.setState({ sortedMovies: newMovies })
    }
    clearFilters = () => {
        console.log("Clearing Filter")
        let newMovies = this.props.movies;
        newMovies = newMovies.filter(m => m.title.includes(""));
        this.setState({ sortedMovies: newMovies })
    }
    setFavorites = (id) => {
        const newFavorite = this.state.favoriteList;
        let newMovie;
        let doesntExist = true;
        for (let f of newFavorite) {
            if (f.id == id) {
                doesntExist = false;
            }
        }
        if (doesntExist) {
            for (let m of this.props.movies) {
                if (m.id == id) {
                    newMovie = m;
                }
            }
            newFavorite.push(newMovie);
            this.setState({ favoriteList: newFavorite });
        }
    }
    deleteFavorite = (id) => {
        let newFavorite = this.state.favoriteList;
        newFavorite = newFavorite.filter(f => f.id != id);
        this.setState({ favoriteList: newFavorite });
    }
    changeView = () => {
        if (this.state.browse == true) {
            this.setState({ browse: false, lookup: true });
        }
        else {
            this.setState({ browse: true, lookup: false });
        }
    }
    lookupMovie = (id) => {
        let newMovie;
        for (let m of this.props.movies) {
            if (m.id == id) {
                newMovie = m;
            }
        }
        this.setState({ movie: newMovie });
        this.changeView();
    }
    render() {
        return (
            <div className="">
                <Favorites favoriteList={this.state.favoriteList} deleteFavorite={this.deleteFavorite} lookupMovie={this.lookupMovie} />
                <div className="tile is-ancester">
                    {this.state.lookup ? <Lookup changeView={this.changeView} movie={this.state.movie} setFavorites={this.setFavorites} /> : null}
                    {this.state.browse ? <Filters setFilters={this.setFilters} clearFilters={this.clearFilters} title={this.props.title} /> : null}
                    {this.state.browse ? <MovieList movies={this.state.sortedMovies} setFavorites={this.setFavorites} lookupMovie={this.lookupMovie} /> : null}
                </div>
            </div>
        );
    }
}

export default Browse