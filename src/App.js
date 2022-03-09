import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <div id="jobs-nav" className="jobs">
                    Jobs
                </div>
                <div id="search-nav" className="search-bar">
                    <input id="search-input"></input>
                </div>
                <div id="empty-nav" className=""></div>
                <div id="profile-nav" className="profile-icon">
                    Profile
                </div>
            </nav>
        </div>
    );
}

export default App;
