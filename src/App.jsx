import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import Hello from "./Hello";

const App = () => {
	return (
		<Routes>
			<Route path="/" index element={<Hello />} />
			<Route path="/" element={<MainLayout />}>
				<Route path="/live-results" element={<div>2d</div>} />
				<Route path="/2d-results" element={<div>2d</div>} />
				<Route path="/3d-results" element={<div>2d</div>} />
				<Route path="/closed-days" element={<div>2d</div>} />
				<Route path="/super-gift" element={<div>2d</div>} />
			</Route>
		</Routes>
	);
};

export default App;
