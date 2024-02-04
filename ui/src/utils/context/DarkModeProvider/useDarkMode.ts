import { useEffect, useState } from "react";
import {
	getLocalstorageValue,
	setLocalstorageValue,
} from "utils/helper-functions/storage";
import { theme } from "antd";

const useDarkMode = (storageKey: string, defaultValue = false) => {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return getLocalstorageValue<boolean>(storageKey) ?? defaultValue;
	});

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		setLocalstorageValue<boolean>(storageKey, isDarkMode);
	}, [isDarkMode, storageKey]);

	return {
		algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
		toggleTheme,
		isDarkMode,
	};
};

export default useDarkMode;
