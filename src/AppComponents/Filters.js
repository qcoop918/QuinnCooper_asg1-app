import React from "react";

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title, yBefore: false, yBeforeVal: "", yAfter: false, yAfterVal: "", yBetween: false, yBetweenVal1: "", yBetweenVal2: "",
            rBelow: false, rBelowVal: "5", rAbove: false, rAboveVal: "5", rBetween: false, rBetweenVal1: "5", rBetweenVal2: "5"
        }
        this.submit();
    }
    submit = () => {
        this.props.setFilters(this.state.title, this.state.yBefore, this.state.yBeforeVal, this.state.yAfter, this.state.yAfterVal, this.state.yBetween, this.state.yBetweenVal1, this.state.yBetweenVal2,
            this.state.rBelow, this.state.rBelowVal, this.state.rAbove, this.state.rAboveVal, this.state.rBetween, this.state.rBetweenVal1, this.state.rBetweenVal2)
    }
    clear = () => {
        this.props.clearFilters();
        document.getElementById("filters").reset();
        this.setState = {
            title: "", yBefore: false, yBeforeVal: "", yAfter: false, yAfterVal: "", yBetween: false, yBetweenVal1: "", yBetweenVal2: "",
            rBelow: false, rBelowVal: "5", rAbove: false, rAboveVal: "5", rBetween: false, rBetweenVal1: "5", rBetweenVal2: "5"
        }
    }
    handleChange = (e) => {
        let elements = this.state;
        if (e.target.name == "year") {
            elements["yBefore"] = false;
            elements["yAfter"] = false;
            elements["yBetween"] = false;
            elements[e.target.id] = e.target.value;
        }
        else if (e.target.name == "rating") {
            elements["rBelow"] = false;
            elements["rAbove"] = false;
            elements["rBetween"] = false;
            elements[e.target.id] = e.target.value;
        }
        else {
            elements[e.target.name] = e.target.value;
        }
        this.setState(elements)
    }
    render() {
        return (
            <div className="tile is-vertical is-3 box">
                <div className="navbar-item">
                    <h3 className="title">Movie Filters</h3>
                </div>
                <div className="level">
                    <button className="button" onClick={this.submit}>Search</button>
                    <button className="button" onClick={this.clear}>Clear</button>
                </div>
                <form className="field" id="filters">
                    <p className="subtitle is-marginless">Title</p>
                    <input className="input" type="text" value={this.state.title} name="title" onChange={this.handleChange}></input>
                    <p className="subtitle is-marginless">Year</p>
                    <div className="radio">
                        <input className="radio is-pulled-right" type="radio" value={true} className="yCheck" id="yBefore" name="year" onChange={this.handleChange}></input>
                        <p className="is-inline"> Before</p>
                    </div>
                    <input className="input" type="number" min="1900" max="2020" name="yBeforeVal" onChange={this.handleChange}></input>
                    <br />
                    <div className="radio">
                        <input className="radio" type="radio" value={true} className="yCheck" id="yAfter" name="year" onChange={this.handleChange}></input>
                        <p className="is-inline"> After</p>
                    </div>
                    <input className="input" type="number" min="1900" max="2020" name="yAfterVal" onChange={this.handleChange}></input>
                    <br />
                    <div className="radio">
                        <input className="radio" type="radio" value={true} className="yCheck" id="yBetween" name="year" onChange={this.handleChange}></input>
                        <p className="is-inline"> Between</p>
                    </div>
                    <input className="input" type="number" min="1900" max={this.state.yBetweenVal2} name="yBetweenVal1" onChange={this.handleChange}></input>
                    <input className="input" type="number" min={this.state.yBetweenVal1} max="2020" name="yBetweenVal2" onChange={this.handleChange}></input>
                    <br />
                    <p className="subtitle is-marginless">Rating</p>
                    <div className="radio">
                        <input className="radio" type="radio" value={true} id="rBelow" name="rating" onChange={this.handleChange}></input>
                        <p className="is-inline"> Below</p>
                    </div>
                    <input className="input" type="range" step="0.1" min="0.0" defaultValue="5.0" max="10.0" name="rBelowVal" onChange={this.handleChange}></input>
                    <div className="has-text-centered">{this.state.rBelowVal}</div>
                    <div className="radio">
                        <input className="radio" type="radio" value={true} id="rAbove" name="rating" onChange={this.handleChange}></input>
                        <p className="is-inline"> Above</p>
                    </div>
                    <input className="input" type="range" step="0.1" min="0.0" defaultValue="5.0" max="10.0" name="rAboveVal" onChange={this.handleChange}></input>
                    <div className="has-text-centered">{this.state.rAboveVal}</div>
                    <div className="radio">
                        <input type="radio" value={true} id="rBetween" name="rating" onChange={this.handleChange}></input>
                        <p className="is-inline"> Between</p>
                    </div>
                    <input className="input" type="range" step="0.1" min="0.0" defaultValue="5.0" max="10.0" name="rBetweenVal1" onChange={this.handleChange}></input>
                    <div className="has-text-centered">{this.state.rBetweenVal1}</div>
                    <input className="input" type="range" step="0.1" min="0.0" defaultValue="5.0" max="10.0" name="rBetweenVal2" onChange={this.handleChange}></input>
                    <div className="has-text-centered">{this.state.rBetweenVal2}</div>
                </form>
            </div>
        )
    }
}

export default Filters