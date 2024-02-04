import { FC, Suspense } from "react";
import { Route, Routes as RRDRoutes } from "react-router-dom";
import { routes } from "data/routeData";
import { Spin } from "components/General";
import withPageTitle from "./withPageTitle";

const Routes: FC = () => {
	return (
		<Suspense fallback={<Spin />}>
			<RRDRoutes>
				{routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</RRDRoutes>
		</Suspense>
	);
};
const RoutesWithPageTitle = withPageTitle(Routes);
export default RoutesWithPageTitle;
