import ArticleContainer from "./components/ArticleContainer";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewContainer from "./components/NewContainer";

function App() {
	return (
		<main className="px-4 pt-6">
			<Header />
			<div className="flex flex-col">
				<div className="lg:flex justify-center sm:gap-8 mb-[60px]">
					<MainArticle />
					<NewContainer />
				</div>

				<ArticleContainer />
			</div>
		</main>
	);
}

export default App;
