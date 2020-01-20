import * as React from "react";
import MovieItem from "./MovieItem"

// Foreach do array da api
export default class Movies extends React.Component {
	
    render() {
            return this.props.movies.map((movie)=>(
            <MovieItem key = { movie.id } movie = {movie} />
            ));
    }
}