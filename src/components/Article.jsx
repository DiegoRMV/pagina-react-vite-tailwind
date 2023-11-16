import imgArticle from "../assets/images/image-retro-pcs.jpg";

const Article = () => {
	return (
		<article className="flex h-[162px]">
			<div className="w-[100px] flex-none">
				<img src={imgArticle} alt="imagen de PC" />
			</div>
			<div className="pl-6">
				<p className="text-GrayisHBlue text-3xl mb-[10px] font-bold">01</p>
				<h2 className="font-bold hover:text-SoftOrange cursor-pointer mb-[8px]">
					Reviving Retro PCs
				</h2>
				<p className="text-GrayishBlue text-[16px]">
					What happens when old PCs are given modern upgrades?
				</p>
			</div>
		</article>
	);
};

export default Article;
