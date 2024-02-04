import { Input } from "antd";
import style from "./search.module.scss";
import CategoryTags from "./components/CategoryTags";
import { ChangeEvent, FC } from "react";

interface SearchProps {
	categories: string[];
	isLoading: boolean;
	searchQuery: string;
	categoryQuery: string;
	onSearchCriteriaChange: (queryType: "q" | "cat", value: string) => void;
}

const Search: FC<SearchProps> = ({
	categories,
	isLoading,
	searchQuery,
	categoryQuery,
	onSearchCriteriaChange,
}) => {
	return (
		<div className={style.search}>
			<Input
				size="large"
				type="text"
				placeholder="Search by title..."
				value={searchQuery}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					onSearchCriteriaChange("q", e.target.value);
				}}
				disabled={isLoading}
			/>

			<CategoryTags
				categories={categories}
				category={categoryQuery}
				handleCategoryChange={(value: string) => {
					onSearchCriteriaChange("cat", value);
				}}
				className={style.search__category}
			/>
		</div>
	);
};

export default Search;
