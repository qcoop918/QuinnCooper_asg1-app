import React from "react";

class MovieInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { modal: false }
    }
    handleClick = () => {
        this.props.changeView();
    }
    handleFavorite = () => {
        this.props.setFavorites(this.props.movie.id);
    }
    handleModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    hourFormat = () => {
        let time = this.props.movie.runtime;
        let hours = time / 60;
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + ":" + rminutes
    }
    moneyFormat = () => {
        return new Intl.NumberFormat().format(this.props.movie.revenue)
    }
    render() {
        if (this.state.modal == true) {
            return (
                <div className="">
                    <div className="modal is-active">
                        <div className="modal-background" onClick={this.handleModal}></div>
                        <img className="modal-content" onClick={this.handleModal} src={"https://image.tmdb.org/t/p/w780/" + this.props.movie.poster}></img>
                    </div>
                    <div className="tile is-5 is-vertical box">
                        <div className="">
                            <div className="level">
                                <h1 className="title">{this.props.movie.title}</h1>
                                <div className="navbar-end nev-menu">
                                    <button className="button nav-item" onClick={this.handleFavorite}>❤</button>
                                    <button className="button nav-item" onClick={this.handleClick}>Close</button>
                                </div>
                            </div>
                            <img className="" onClick={this.handleModal} src={"https://image.tmdb.org/t/p/w342/" + this.props.movie.poster}></img>
                        </div>
                        <div className="">
                            <p className="title">Overview</p>
                            <p>{"ReleaseDate: " + this.props.movie.release_date}</p>
                            <p>{"Revenue: $" + this.moneyFormat()}</p>
                            <p>{"RunTime: " + this.hourFormat()}</p>
                            <p>{"Tagline: " + this.props.movie.tagline}</p>
                            <a href={"https://www.imdb.com/title/" + this.props.movie.imdb_id}>imdb</a>
                            <br />
                            <a href={"https://www.themoviedb.org/movie/" + this.props.movie.tmdb_id}>tmdb</a>
                            <br />
                            <p className="subtitle">Ratings</p>
                            <p>{"Average: " + this.props.movie.ratings.average}</p>
                            <p>{"Amount: " + this.props.movie.ratings.count}</p>
                            <p>{"Popularity: " + this.props.movie.ratings.popularity}</p>
                            <div>
                                <br />
                                <p className="subtitle">Companies</p>
                                {this.props.movieInfo.production.companies.map((c) => <p>{c.name}</p>)}
                            </div>
                            <div>
                                <br />
                                <p className="subtitle">Countries</p>
                                {this.props.movieInfo.production.countries.map((c) => <p>{c.name}</p>)}
                            </div>
                            <div>
                                <br />
                                <p className="subtitle">Genres</p>
                                {this.props.movieInfo.details.genres.map((c) => <p>{c.name}</p>)}
                            </div>
                            <div>
                                <br />
                                <p className="subtitle">Keywords</p>
                                {this.props.movieInfo.details.keywords.map((c) => <p>{c.name}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="tile is-4 is-vertical box">
                <div className="">
                    <div className="level">
                        <h1 className="title">{this.props.movie.title}</h1>
                        <div className="navbar-end nev-menu">
                            <button className="button nav-item" onClick={this.handleFavorite}>❤</button>
                            <button className="button nav-item" onClick={this.handleClick}>Close</button>
                        </div>
                    </div>
                    <img className="" onClick={this.handleModal} src={"https://image.tmdb.org/t/p/w342/" + this.props.movie.poster}></img>
                </div>
                <div className="">
                    <p className="title">Overview</p>
                    <p>{"ReleaseDate: " + this.props.movie.release_date}</p>
                    <p>{"Revenue: $" + this.moneyFormat()}</p>
                    <p>{"RunTime: " + this.hourFormat()}</p>
                    <p>{"Tagline: " + this.props.movie.tagline}</p>
                    <a href={"https://www.imdb.com/title/" + this.props.movie.imdb_id}>imdb</a>
                    <br />
                    <a href={"https://www.themoviedb.org/movie/" + this.props.movie.tmdb_id}>tmdb</a>
                    <br />
                    <p className="subtitle">Ratings</p>
                    <p>{"Average: " + this.props.movie.ratings.average}</p>
                    <p>{"Amount: " + this.props.movie.ratings.count}</p>
                    <p>{"Popularity: " + this.props.movie.ratings.popularity}</p>
                    <div>
                        <br />
                        <p className="subtitle">Companies</p>
                        {this.props.movieInfo.production.companies.map((c) => <p>{c.name}</p>)}
                    </div>
                    <div>
                        <br />
                        <p className="subtitle">Countries</p>
                        {this.props.movieInfo.production.countries.map((c) => <p>{c.name}</p>)}
                    </div>
                    <div>
                        <br />
                        <p className="subtitle">Genres</p>
                        {this.props.movieInfo.details.genres.map((c) => <p>{c.name}</p>)}
                    </div>
                    <div>
                        <br />
                        <p className="subtitle">Keywords</p>
                        {this.props.movieInfo.details.keywords.map((c) => <p>{c.name}</p>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieInfo