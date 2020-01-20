// MARK: React
import * as React from "react";
import "./style.scss";

// MARK: Mobx
import { observer, inject } from "mobx-react";

// MARK: Resources
import strings from "../../resources/strings";

// MARK: Stores
import { RouterStore } from "mobx-react-router";

// MARK: Layout
import MainLayout from "../../layouts/MainLayout";

// MARK: Components
import FilledButton from "../../components/FilledButton";

// Axios para requisição http
import Axios from "axios";

// import Movies
import Movies from "../../components/Movies";

interface IProps {
	routerStore: RouterStore;
}

@inject("routerStore")
@observer
export default class HomePage extends React.Component<IProps> {

	public state = {
		movies : [] 	
	};

	// Requisição get para obter os dados da api	
	public async componentDidMount(){
		Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=323e64a92d60093c30b3a0592469e12b&language=en-US&page=1')
		.then(res => this.setState({ movies : res.data.results }))
	}

	public	render() {
		return(
			<MainLayout>
				<div className="homePageContainer">
				<Movies movies={this.state.movies} />
				</div>
			</MainLayout>					
		);
	}
}
