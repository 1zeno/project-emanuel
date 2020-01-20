import * as React from "react";
import Card from '../../src/styles/_card'

//Renderização dos Cards
export default class MovieItem extends React.Component {
	
    render() {
            return (
                <div className="card">
                    <img className = "imagem" src={"https://image.tmdb.org/t/p/w185/"+this.props.movie.backdrop_path} alt="Movie"/>
                    <h4>{this.props.movie.title}</h4>
                </div>
            );
    }
}

