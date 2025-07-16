import "./index.css";

import RootLayout from "@components/Layout/RootLayout";
import { PageLoader } from "@components/PageLoader";
import { flatRoutes } from "@routes/routes";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<RootLayout>
				<Suspense fallback={<PageLoader />}>
					<Routes>
						{flatRoutes.map((route) => (
							<Route
								key={route.path}
								path={route.path}
								element={<route.component />}
							/>
						))}
					</Routes>
				</Suspense>
			</RootLayout>
		</BrowserRouter>
	);
}
