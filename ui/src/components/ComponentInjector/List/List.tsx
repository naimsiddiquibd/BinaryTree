import { FC } from "react";

export interface ListItemProps<T> {
	resource: T;
	handleOnClick: (url: string) => void;
	isLoading: boolean;
}

export interface ListProps<T> {
	items: T[];
	itemComponent: FC<ListItemProps<T>>;
	isLoading: boolean;
}

const List = <T,>({
	items,
	itemComponent: ItemComponent,
	isLoading,
}: ListProps<T>): JSX.Element => {
	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<>
			{items?.map((item) => (
				<ItemComponent
					key={crypto.randomUUID()}
					resource={item}
					handleOnClick={handleOnClick}
					isLoading={isLoading}
				/>
			))}
		</>
	);
};

export default List;
