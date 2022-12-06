import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import Hello from "./Hello";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<Hello />} />
			</Route>
		</Routes>
	);
};

export default App;
