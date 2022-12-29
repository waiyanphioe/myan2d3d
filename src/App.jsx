import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import Hello from "./Hello";
import { ThreeDresults, TwoDresults, Privacy } from "./components";

const App = () => {
	return (
		<Routes>
			<Route path="/" index element={<Hello />} />
			<Route path="/" element={<MainLayout />}>
				<Route path="/live-results" element={<div>2d</div>} />
				<Route
					path="/2d-results"
					element={<TwoDresults title="2D Result History" />}
				/>
				<Route
					path="/3d-results"
					element={<ThreeDresults title="3D Result History" />}
				/>
				<Route path="/closed-days" element={<div>2d</div>} />
				<Route path="/super-gift" element={<div>2d</div>} />
				<Route path="/privacy" element={<Privacy title="Privacy" />} />
			</Route>
		</Routes>
	);
};

export default App;
