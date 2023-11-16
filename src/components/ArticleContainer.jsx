import Article from "./Article";

const ArticleContainer = () => {
	return (
		<section className="lg:flex justify-around">
			<Article />
			<Article />
			<Article />
		</section>
	);
};

export default ArticleContainer;
