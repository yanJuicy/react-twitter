import {Route, HashRouter as Router, Routes} from "react-router-dom";
import {useState} from "react";
import {Home} from "../routes/Home";
import {Auth} from "../routes/Auth";

export const AppRouter = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route exact path="/" element={<Home/>}/>
                ) : (
                    <Route exact path="/" element={<Auth/>}/>
                )}
            </Routes>
        </Router>
    );
};