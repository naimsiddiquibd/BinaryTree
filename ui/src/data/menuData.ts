import { MenuProps } from "antd";
import { IconName } from "components/General";
import { getItem } from "components/Layouts/Menu/helper";
import { routesById } from "data/routeData";

const IN_DEVELOPMENT = import.meta.env.DEV;

export const MENU_ITEMS = [
	{
		name: "Newsfeed",
		icon: "Newspaper",
		show: true,
		children: [
			{
				name: routesById.newsfeed.title,
				url: routesById.newsfeed.path,
				icon: "Mailbox",
				show: true,
			},
		],
	},
	{
		name: "Colors",
		icon: "Brush",
		show: true,
		children: [
			{
				name: routesById.colorpicker.title,
				url: routesById.colorpicker.path,
				icon: "Baseline",
				show: true,
			},
			{
				name: routesById.shadesandtints.title,
				url: routesById.shadesandtints.path,
				icon: "Layers",
				show: true,
			},
		],
	},
	{
		name: "CSS",
		icon: "Code",
		show: true,
		children: [
			{
				name: routesById.borderradius.title,
				url: routesById.borderradius.path,
				icon: "Square",
				show: true,
			},
			{
				name: routesById.boxshadow.title,
				url: routesById.boxshadow.path,
				icon: "Box",
				show: true,
			},
			{
				name: routesById.flexboxgenerator.title,
				url: routesById.flexboxgenerator.path,
				icon: "AlignCenter",
				show: IN_DEVELOPMENT,
			},
			{
				name: routesById.units.title,
				url: routesById.units.path,
				icon: "Boxes",
				show: IN_DEVELOPMENT,
			},
		],
	},
	{
		name: "Converter",
		icon: "Repeat",
		show: true,
		children: [
			{
				name: routesById.base64.title,
				url: routesById.base64.path,
				icon: "Replace",
				show: true,
			},
			{
				name: routesById.fileconverter.title,
				url: routesById.fileconverter.path,
				icon: "FileImage",
				show: true,
			},
			{
				name: routesById.pixelconverter.title,
				url: routesById.pixelconverter.path,
				icon: "FileOutput",
				show: true,
			},
			{
				name: routesById.jsontotypescript.title,
				url: routesById.jsontotypescript.path,
				icon: "FileOutput",
				show: true,
			},
			{
				name: routesById.svg.title,
				url: routesById.svg.path,
				icon: "Command",
				show: true,
			},
		],
	},
	{
		name: "Generator",
		icon: "Database",
		show: true,
		children: [
			{
				name: routesById.data.title,
				url: routesById.data.path,
				icon: "DatabaseBackup",
				show: true,
			},
			{
				name: routesById.imagegeneratorfromcolors.title,
				url: routesById.imagegeneratorfromcolors.path,
				icon: "Image",
				show: true,
			},
			{
				name: routesById.avatar.title,
				url: routesById.avatar.path,
				icon: "BadgeHelp",
				show: true,
			},
			{
				name: routesById.qrcode.title,
				url: routesById.qrcode.path,
				icon: "QrCode",
				show: true,
			},
			{
				name: routesById.csharpbuilder.title,
				url: routesById.csharpbuilder.path,
				icon: "Code",
				show: true,
			},
		],
	},
	{
		name: "Markdown",
		icon: "Code2",
		show: true,
		children: [
			{
				name: routesById.docs.title,
				url: routesById.docs.path,
				icon: "FileStack",
				show: IN_DEVELOPMENT,
			},
			{
				name: routesById.editor.title,
				url: routesById.editor.path,
				icon: "FileEdit",
				show: true,
			},
			{
				name: routesById.table.title,
				url: routesById.table.path,
				icon: "Dice5",
				show: true,
			},
			{
				name: routesById.tableofcontent.title,
				url: routesById.tableofcontent.path,
				icon: "Table",
				show: true,
			},
		],
	},
	{
		name: "Text",
		icon: "Pencil",
		show: true,
		children: [
			{
				name: routesById.texteditor.title,
				url: routesById.texteditor.path,
				icon: "ClipboardEdit",
				show: true,
			},
		],
	},
	{
		name: "Tools",
		icon: "Wrench",
		show: true,
		children: [
			{
				name: routesById.codeformatter.title,
				url: routesById.codeformatter.path,
				icon: "Code",
				show: true,
			},

			{
				name: routesById.diagramming.title,
				url: routesById.diagramming.path,
				icon: "PencilRuler",
				show: true,
			},
			{
				name: routesById.diffchecker.title,
				url: routesById.diffchecker.path,
				icon: "Diff",
				show: true,
			},
			{
				name: routesById.progressivewebapp.title,
				url: routesById.progressivewebapp.path,
				icon: "Globe",
				show: true,
			},
			{
				name: routesById.sorting.title,
				url: routesById.sorting.path,
				icon: "ArrowUpNarrowWide",
				show: true,
			},
		],
	},
	{
		name: "Automation",
		icon: "Workflow",
		show: true,
		children: [
			{
				name: routesById.githubissue.title,
				url: routesById.githubissue.path,
				icon: "Bug",
				show: true,
			},
		],
	},
	{
		name: "Networking",
		icon: "Globe",
		show: IN_DEVELOPMENT,
		children: [
			{
				name: routesById.ipsubnet.title,
				url: routesById.ipsubnet.path,
				icon: "Globe",
				show: IN_DEVELOPMENT,
			},
		],
	},
	{
		name: "Information",
		icon: "BadgeInfo",
		show: true,
		children: [
			{
				name: routesById.mimetype.title,
				url: routesById.mimetype.path,
				icon: "ArrowLeftRight",
				show: true,
			},
			{
				name: routesById.npmpackages.title,
				url: routesById.npmpackages.path,
				icon: "PackageCheck",
				show: true,
			},
		],
	},
	{
		name: "Resource",
		icon: "List",
		show: true,
		children: [
			{
				name: routesById.ai.title,
				url: routesById.ai.path,
				icon: "Brain",
				show: true,
			},
			{
				name: routesById.blog.title,
				url: routesById.blog.path,
				icon: "Keyboard",
				show: true,
			},
			{
				name: routesById.book.title,
				url: routesById.book.path,
				icon: "BookOpen",
				show: true,
			},
			{
				name: routesById.course.title,
				url: routesById.course.path,
				icon: "GraduationCap",
				show: true,
			},
			{
				name: routesById.designsystem.title,
				url: routesById.designsystem.path,
				icon: "LayoutDashboard",
				show: true,
			},
			{
				name: routesById.github.title,
				url: routesById.github.path,
				icon: "Github",
				show: true,
			},
			{
				name: routesById.icon.title,
				url: routesById.icon.path,
				icon: "Square",
				show: true,
			},
			{
				name: routesById.interview.title,
				url: routesById.interview.path,
				icon: "Users",
				show: true,
			},
			{
				name: routesById.movie.title,
				url: routesById.movie.path,
				icon: "Clapperboard",
				show: true,
			},
			{
				name: routesById.platform.title,
				url: routesById.platform.path,
				icon: "Server",
				show: true,
			},
			{
				name: routesById.plugin.title,
				url: routesById.plugin.path,
				icon: "Plug",
				show: true,
			},
			{
				name: routesById.survey.title,
				url: routesById.survey.path,
				icon: "Vote",
				show: true,
			},
			{
				name: routesById.tool.title,
				url: routesById.tool.path,
				icon: "Wrench",
				show: true,
			},
			{
				name: routesById.tvseries.title,
				url: routesById.tvseries.path,
				icon: "Tv",
				show: true,
			},
			{
				name: routesById.uiux.title,
				url: routesById.uiux.path,
				icon: "Brush",
				show: true,
			},
			{
				name: routesById.youtube.title,
				url: routesById.youtube.path,
				icon: "Youtube",
				show: true,
			},
		],
	},
];

const ITEMS: MenuProps["items"] = [
	...MENU_ITEMS.filter((rootItem) => rootItem.show).map((item) => {
		return getItem(
			item.name,
			item.name as React.Key,
			item.icon as IconName,
			item.children.length > 0
				? item.children
						.filter((childItem) => childItem.show)
						.map((child) =>
							getItem(
								child.name,
								child.url as React.Key,
								child.icon as IconName
							)
						)
				: undefined
		);
	}),
];

export { ITEMS };
