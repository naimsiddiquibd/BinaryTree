import { BEAM } from "data/beamData";
import { HELP } from "data/helpData";
import { routes } from "data/routeData";
import { useLocation } from "react-router-dom";

export default function usePageTitle() {
	const { pathname } = useLocation();
	const page = routes.find((route) => route.path === pathname) ?? {
		title: "Page Not Found",
		description: "",
		id: "",
	};

	const { title, description, id } = page;

	return {
		title,
		description,
		helpObject: HELP[id] || {},
		beamObject: BEAM[id] || [],
		url: `https://binarytree.dev${pathname}`,
	};
}
