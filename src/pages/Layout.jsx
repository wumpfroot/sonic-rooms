import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<div className="container mx-auto min-h-screen flex flex-col">
			<nav className="flex justify-between">
				<h1>Sonic Rooms</h1>
				<ul className="flex gap-5">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/rooms">Rooms</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};
export default Layout;
