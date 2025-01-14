import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";

const Header = () => {
	return (
		<header className="bg-[#d8dad9] flex justify-between items-center p-4">
			<Link href={"/"}>
				<Image className="h-12 w-auto" src={logo} alt="Sonic rooms logo" />
			</Link>
			<nav>
				<ul className="flex items-center gap-4">
					<Link href={"/rooms"}>
						<li>Rooms</li>
					</Link>
					<li>About</li>
					<li>Login</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
