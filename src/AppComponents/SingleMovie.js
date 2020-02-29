import React from "react";

class SingleMovie extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = (e) => {
        e.stopPropagation();
        this.props.setFavorites(this.props.movie.id);
    }
    handleMovie = () => {
        this.props.lookupMovie(this.props.movie.id);
    }
    render() {
        return (
            <tr className="" onClick={this.handleMovie}>
                <td>
                    <img className="" src={"https://image.tmdb.org/t/p/w154/" + this.props.movie.poster}></img>
                </td>
                <td className="has-text-centered">{this.props.movie.title}</td>
                <td className="has-text-centered">{this.props.movie.release_date}</td>
                <td className="has-text-centered">{this.props.movie.ratings.average}</td>
                <td>
                    <button className="button" onClick={this.handleClick}>❤</button>
                </td>
            </tr>
        )
    }
}

export default SingleMovie