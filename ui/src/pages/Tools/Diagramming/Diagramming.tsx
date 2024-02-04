import { Excalidraw } from "@excalidraw/excalidraw";
import style from "./Diagramming.module.scss";
import { useMode, useCombinedKeyPress } from "hooks";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types";
import { useRef, useState } from "react";

const Diagramming = () => {
	const { isDarkMode } = useMode();
	const lastElementsRef = useRef<readonly ExcalidrawElement[]>([]);
	const [btEcalidraw, setBtEcalidraw] =
		useState<ExcalidrawInitialDataState | null>({
			elements: [],
		});

	const clearInputs = () => {
		console.log("Element removed");
		if (btEcalidraw?.elements && btEcalidraw?.elements?.length > 0) {
			const newElements = btEcalidraw.elements.slice(0, -1); // Remove the last element
			setBtEcalidraw({
				...btEcalidraw,
				elements: newElements,
			});
			console.log("Element removed");
		}
	};

	useCombinedKeyPress(clearInputs, "z");

	const onChange = (elements: readonly ExcalidrawElement[]) => {
		if (elements !== lastElementsRef.current) {
			setBtEcalidraw((prevData) => ({
				...prevData,
				elements: elements,
			}));
			lastElementsRef.current = elements;
			console.log("btEcalidraw", btEcalidraw);
		}
	};

	return (
		<div className={style.diagramming}>
			<Excalidraw
				theme={isDarkMode ? "dark" : "light"}
				onChange={onChange}
				// initialData={btEcalidraw}
			/>
		</div>
	);
};

export default Diagramming;
