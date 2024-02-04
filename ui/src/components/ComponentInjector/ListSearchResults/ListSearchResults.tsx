import style from "./ListSearchResults.module.scss";
import { Search, Text, getCategories } from "components/General";
import { List, ListProps } from "components/ComponentInjector";
import { API_ERROR, API_NO_DATA } from "data/constants";
import { filteredNews, filteredResource } from "./helper";
import { ReactElement } from "react";
import { QUERY_KEY_NEWS } from "pages/Newsfeed/constants";
import { useParamsValue } from "hooks";
import { ResourceType } from "components/InjectedComponent";

const DEFAULT_RESULT_COUNT = 20;

export interface ListSearchResultsProps<T> extends ListProps<T> {
	resourceName: string;
	isError: boolean;
}

const ListSearchResults = <T,>({
	items,
	resourceName,
	itemComponent,
	isLoading,
	isError,
}: ListSearchResultsProps<T>): ReactElement => {
	const { searchParams, updateParamsValue } = useParamsValue({});

	if (isError) {
		return <Text text={API_ERROR} />;
	}

	if (!isError && !isLoading && items?.length === 0) {
		return <Text text={API_NO_DATA} />;
	}

	const { q: searchQuery, cat: categoryQuery } = {
		q: searchParams.get("q") ?? "",
		cat: searchParams.get("cat") ?? "",
	};

	const filteredList =
		resourceName === QUERY_KEY_NEWS
			? filteredNews(searchQuery, items)
			: filteredResource(searchQuery, categoryQuery, items);

	const list = filteredList || [...Array(DEFAULT_RESULT_COUNT).keys()];

	const categories = getCategories(items as ResourceType[], resourceName);

	const onSearchCriteriaChange = (queryType: "q" | "cat", value: string) => {
		updateParamsValue(queryType, value);
	};

	return (
		<div className={style.container}>
			<Search
				categories={categories}
				isLoading={isLoading}
				searchQuery={searchQuery}
				categoryQuery={categoryQuery}
				onSearchCriteriaChange={onSearchCriteriaChange}
			/>
			<List
				items={list}
				itemComponent={itemComponent}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default ListSearchResults;
