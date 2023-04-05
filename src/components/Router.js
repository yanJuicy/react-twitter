import {Route, HashRouter as Router, Routes} from "react-router-dom";
import {Home} from "routes/Home";
import {Auth} from "routes/Auth";

export const AppRouter = ({isLoggedIn}) => {

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