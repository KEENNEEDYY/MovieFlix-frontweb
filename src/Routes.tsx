import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";
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
            <PrivateRoute path="/movies">
                <MovieCatalog />
            </PrivateRoute>
            <PrivateRoute path="/movies/:movieId">
                <MovieDetails />
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;