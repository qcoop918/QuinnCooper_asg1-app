import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: "" }
    }
    handleChange = (e) => {
        this.setState({ title: e.target.value });
    }
    handleClick = () => {
        this.props.getTitle(this.state.title)
    }
    render() {
        let backgroundUrl = "https://images.unsplash.com/photo-1534253893894-10d024888e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80";
        return (
            <div className="Background hero-body columns" style={{
                backgroundImage: 'url(' + backgroundUrl + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="column"></div>
                    <div className=" column is-one-half has-text-centered has-background-white-ter box">
                        <h1 className="title">Search Movies</h1>
                        <input className="input" type="text" name="filter" value={this.state.title} onChange={this.handleChange}></input>
                        <Link to='/browse'>
                            <button className="button" onClick={this.handleClick}>Search</button>
                        </Link>
                    </div>
                    <div className="column"></div>
                </div>
        );
    }
}

export default Home