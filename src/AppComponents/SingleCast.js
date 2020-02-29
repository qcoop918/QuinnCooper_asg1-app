import React from "react";

class SingleCast extends React.Component {
    clickHandler = () =>{
        this.props.setCast(this.props.cast.id);
    }
    render() {
        return (
            <tr className="" onClick={this.clickHandler}>
                <td className="">{"Character: "+this.props.cast.character}</td>
                <td className="">{"Performed By: "+this.props.cast.name}</td>
            </tr>
        )
    }
}

export default SingleCast