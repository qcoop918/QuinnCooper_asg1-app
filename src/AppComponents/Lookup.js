import React from "react";
import MovieInfo from "./MovieInfo";
import CastCrewInfo from "./CastCrewInfo";
import StarInfo from "./StarInfo";

class Lookup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { movie: this.props.movie, movieView: true, starView: false, castID: "" }
    }
    async componentDidMount() {
        let url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=" + this.props.movie.id;
        const response = await fetch(url)
        const data = await response.json();
        this.setState({ movieInfo: data })
    }
    changeView = () =>{
        this.setState({ movieView: !this.state.movieView, starView: !this.state.starView})
    }
    setCast = (id) =>{
        this.setState({castID: id})
        if(this.state.starView == false){
            this.changeView();
        }
    }
    render() {
        if(!this.state.movieInfo) return <div/>
        return (
            <div className="tile is-ancestor">
                {this.state.starView ?<StarInfo changeView={this.changeView} castID={this.state.castID} /> : null}
                {this.state.movieView ?<MovieInfo changeView={this.props.changeView} movie={this.state.movie} setFavorites={this.props.setFavorites} movieInfo={this.state.movieInfo}/> : null}
                <CastCrewInfo movieInfo={this.state.movieInfo} changeView={this.changeView} setCast={this.setCast}></CastCrewInfo>
            </div>
        )
    }
}

export default Lookup