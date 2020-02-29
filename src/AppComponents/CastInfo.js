import React from "react";
import SingleCast from "./SingleCast";

class CastInfo extends React.Component {
    render() {
        if (this.props.movieInfo.production.cast == undefined) {
            return (
                <div>
                    <p>No cast info available</p>
                </div>)
        }
        return (
                <tbody>
                {this.props.movieInfo.production.cast.map((c) => <SingleCast cast={c} setCast={this.props.setCast} />)}
            </tbody>
        )
    }
}

export default CastInfo