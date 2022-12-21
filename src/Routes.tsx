import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/movies" exact>
                <MovieCatalog />
            </Route>
            <Route path="/movies/1">
                <MovieDetails />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;