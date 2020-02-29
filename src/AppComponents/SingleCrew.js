import React from "react";

class SingleCrew extends React.Component {
    clickHandler = (e) => {
        
    }
    render() {
        return (
            <tr className="" onClick={this.clickHandler}>
                <td className="">{"Job: "+this.props.crew.department}</td>
                <td className="">{"Performed By: "+this.props.crew.name}</td>
            </tr>
        )
    }
}

export default SingleCrew