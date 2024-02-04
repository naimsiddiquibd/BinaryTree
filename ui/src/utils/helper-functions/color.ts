import tinycolor from "tinycolor2";

export function getTextColor(value: string): string {
	return tinycolor(value).isDark() ? "white" : "black";
}

export function isTransparent(value: string): boolean {
	if (tinycolor(value).getAlpha() < 1) {
		return true;
	}
	return false;
}
