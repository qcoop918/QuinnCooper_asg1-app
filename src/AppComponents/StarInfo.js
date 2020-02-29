import React from "react";

class StarInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { starInfo: [] }
    }
    async componentDidMount() {
        let url = "https://api.themoviedb.org/3/person/" + this.props.castID + "?api_key=73a204dda18d707d225e469e77b9e679";
        const response = await fetch(url)
        const data = await response.json();
        this.setState({ starInfo: data })
    }
    async componentDidUpdate(prevProps) {
        if (this.props.castID !== prevProps.castID) {
            let url = "https://api.themoviedb.org/3/person/" + this.props.castID + "?api_key=73a204dda18d707d225e469e77b9e679";
            const response = await fetch(url)
            const data = await response.json();
            this.setState({ starInfo: data })
        }
    }
    clickHandler = () => {
        this.props.changeView();
    }
    render() {
        if (!this.state.starInfo) return <div />
        return (
            <div className="tile is-5 is-vertical box">
                <div className="">
                    <div className="level">
                        <h1 className="title">{this.state.starInfo.name}</h1>
                        <div className="navbar-end nev-menu">
                            <button className="button nav-item" onClick={this.clickHandler}>Close</button>
                        </div>
                    </div>
                    <img className="" src={"https://image.tmdb.org/t/p/w342/" + this.state.starInfo.profile_path}></img>
                </div>
                <div>
                    <p>{"Birthday: " + this.state.starInfo.birthday}</p>
                    <p>{"Biography: " + this.state.starInfo.biography}</p>
                    <p>{"Place of Birth: " + this.state.starInfo.place_of_birth}</p>
                    <a href={"https://www.imdb.com/title/" + this.state.starInfo.imdb_id}>imdb</a>
                </div>
            </div>
        )
    }
}

export default StarInfo