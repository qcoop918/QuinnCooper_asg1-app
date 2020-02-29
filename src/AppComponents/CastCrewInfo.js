import React from "react";
import CastInfo from "./CastInfo";
import CrewInfo from "./CrewInfo";

class CastCrewInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cast: true, crew: false }
    }

    changeCast = () => {
        this.setState({ cast: true, crew: false })
        document.getElementById("cast").className = "nav-item pagination-link is-current";
        document.getElementById("crew").className = "nav-item pagination-link";
    }
    changeCrew = () => {
        this.setState({ cast: false, crew: true })
        document.getElementById("cast").className = "nav-item pagination-link";
        document.getElementById("crew").className = "nav-item pagination-link is-current";
    }
    render() {
        return (
            <div className="tile is-vertical box">
                <div className="level">
                    <div className="level-left">
                        <h3 className="title">CastCrewInfo</h3>
                    </div>
                    <div className="navbar-end nev-menu">
                        <p className="nav-item pagination-link is-current" id="cast" onClick={this.changeCast}>CastInfo</p>
                        <p className="nav-item pagination-link" id="crew" onClick={this.changeCrew}>CrewInfo</p>
                    </div>
                </div>
                <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
                {this.state.cast ? <CastInfo movieInfo={this.props.movieInfo} setCast={this.props.setCast} /> : null}
                {this.state.crew ? <CrewInfo movieInfo={this.props.movieInfo} /> : null}
                </table>

            </div>
        )
    }
}

export default CastCrewInfo