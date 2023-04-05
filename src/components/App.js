import {AppRouter} from "components/Router";
import {useState} from "react";
import {authService} from "fbase";

export const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
        </>
    )
};
