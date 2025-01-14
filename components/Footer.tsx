const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div>
			<p className="text-center italic text-sm">&copy; {currentYear} Sonic Rooms. All rights reserved.</p>
		</div>
	);
};

export default Footer;
