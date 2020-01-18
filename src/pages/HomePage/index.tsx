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

// import api
import Movie from "../../resources/api_movie";
interface IProps {
	routerStore: RouterStore;
}

@inject("routerStore")
@observer
export default class HomePage extends React.Component<IProps> {
	public render() {
		return (
			<MainLayout>
				<div className="homePageContainer">
					<h1>{strings.welcome}</h1>
					<div id="output">
					</div>
					<p><img src="https://image.tmdb.org/t/p/w185/rYyIqfx6BNpb7s0Wy5OqddCsKEQ.jpg" alt="movieImage" /></p>

					<FilledButton
						onClick={() => Movie.topRatedMovie()}
					>
						{strings.helloWorld}
					</FilledButton>
				</div>
			</MainLayout>
		);
	}
}
