import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/rooms" element={<Rooms />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
