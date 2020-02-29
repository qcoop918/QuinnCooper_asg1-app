import React from "react";

class SingleFavorite extends React.Component {
    deleteHandler = (e) => {
        this.props.deleteFavorite(this.props.movie.id);
    }
    navigateMovie = () => {
        this.props.lookupMovie(this.props.movie.id);
    }
    render() {
        return (
            <div>
                <div className="tile is-vertical">
                    <img onClick={this.navigateMovie} src={"https://image.tmdb.org/t/p/w92/" + this.props.movie.poster}></img>
                    <button className="button" onClick={this.deleteHandler}>Delete</button>
                </div>
                <div className=""></div>
            </div>
        )
    }
}

export default SingleFavorite