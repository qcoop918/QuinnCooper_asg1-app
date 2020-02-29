import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { modal: false }
    }
    modalHandler = () => {
        if(this.state.modal == false){
            document.getElementById("modal").className = "modal is-active"
            this.setState({modal: true})
        }
        else{
            document.getElementById("modal").className = "modal"
            this.setState({modal: false})
        }
    }
    render() {
        return (
            <header className="hero-head">
                <nav className="navbar has-background-white-ter">
                    <div className="container ">
                        <div className="navbar-brand">
                            <div className="navbar-item">
                                <h1 className="title">Quinn's Movie App</h1>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <Link to='/home'>
                                <div className="navbar-item">Home</div>
                            </Link>
                            <Link to='/browse'>
                                <div className="navbar-item">Browse</div>
                            </Link>
                            <div>
                                <div className="navbar-item" onClick={this.modalHandler}>About</div>
                            </div>
                            <div id="modal" className="modal">
                                <div className="modal-background" onClick={this.modalHandler}></div>
                                <div className="modal-content" onClick={this.modalHandler}>
                                    <div className="box">
                                        <p className="subtitle">Credits:</p>
                                        <a href="https://bulma.io/documentation/">CSS provided by Bulma CSS framework</a>
                                        <p>Homepage Photo: Photo by Nathan DeFiesta on Unsplash</p>
                                        <p>Made by: Quinn Cooper qcoop918@mtroyal.ca</p>
                                        <p>Made using React</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;