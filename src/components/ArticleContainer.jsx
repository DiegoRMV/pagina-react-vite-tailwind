import Article from "./Article";

const ArticleContainer = () => {
	return (
		<section className="md:flex mt-6 justify-around">
			<Article />
			<Article />
			<Article />
		</section>
	);
};

export default ArticleContainer;
