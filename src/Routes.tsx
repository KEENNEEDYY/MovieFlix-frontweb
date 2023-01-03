import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";
import {  Route, Router, Switch } from "react-router-dom";
import history from "util/history";

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/movies" exact>
                <MovieCatalog />
            </Route>
            <Route path="/movies/:movieid">
                <MovieDetails />
            </Route>
        </Switch>
    </Router>
);

export default Routes;