import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "@/components/Layout/RootLayout";
import { flatRoutes } from "@/routes/routes";

export default function App() {
	return (
		<BrowserRouter>
			<RootLayout>
				<Routes>
					{flatRoutes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					))}
				</Routes>
			</RootLayout>
		</BrowserRouter>
	);
}
