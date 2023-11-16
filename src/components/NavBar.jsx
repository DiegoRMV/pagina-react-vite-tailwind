import burguer from "../assets/images/icon-menu.svg";

const NavBar = () => {
	return (
		<>
			<ul className="hidden sm:flex sm:w-[438px] sm:place-content-around sm:text-[18px] text-[16px] sm:items-center">
				<li href="#">Home</li>
				<li href="#">New</li>
				<li href="#">Popular</li>
				<li href="#">Trending</li>
				<li href="#">Categories</li>
			</ul>
			<img
				className="w-10 h-4 cursor-pointer sm:hidden"
				src={burguer}
				alt="logo hamburgues"
			></img>
		</>
	);
};

export default NavBar;
