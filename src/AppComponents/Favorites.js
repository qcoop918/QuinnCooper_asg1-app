import React from "react";
import SingleFavorite from "./SingleFavorite";

class Favorites extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hidden: false, visible: true }
    }
    clickHandler = () => {
        this.setState({ hidden: !this.state.hidden, visible: !this.state.visible })
    }
    render() {
        return (
            <div className="tile is-vertical box">
                {this.state.visible ? <button className="button" onClick={this.clickHandler}>▲</button> : null}
                {this.state.hidden ? <button className="button" onClick={this.clickHandler}>▼</button> : null}
                {this.state.visible ? <div>
                    <h3 className="subtitle">Favorites</h3>
                    <div className="tile">
                        {this.props.favoriteList.map((f) => <SingleFavorite movie={f} deleteFavorite={this.props.deleteFavorite} lookupMovie={this.props.lookupMovie}></SingleFavorite>)}
                    </div>
                </div> : null}
            </div>
        )
    }
}

export default Favorites