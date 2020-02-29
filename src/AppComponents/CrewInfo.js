import React from "react";
import SingleCrew from "./SingleCrew";

class CrewInfo extends React.Component {
    render() {
        if (this.props.movieInfo.production.crew == undefined) {
            return (
                <div>
                    <p>No crew info available</p>
                </div>)
        }
        return (
            <tbody className="">
                {this.props.movieInfo.production.crew.map((c) => <SingleCrew crew={c} />)}
            </tbody>
        )
    }
}

export default CrewInfo