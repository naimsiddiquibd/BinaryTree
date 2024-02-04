import { Input, InputRef, Modal } from "antd";
import { MENU_ITEMS } from "data/menuData";
import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./PopSearch.module.scss";
import { Icon, IconName } from "components/General";
import { useCombinedKeyPress, useMode, useModal, useKeyPress } from "hooks";
import { classNames } from "utils/helper-functions/string";

const { Search } = Input;
const items = MENU_ITEMS.map((item) => item.children).flat();

const PopupSearch: FC = () => {
	const navigate = useNavigate();
	const { isDarkMode } = useMode();
	const { handleModalOpen, isModalOpen } = useModal();
	const [input, setInput] = useState<string>("");
	const [filteredItems, setFilteredItems] = useState(items);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const onClickHandler = (url: string) => {
		navigate(url);
		handleModalOpen();
	};

	const handleArrowUp = () => {
		setSelectedIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
	};

	const handleArrowDown = () => {
		setSelectedIndex((prevIndex) =>
			prevIndex === filteredItems.length - 1
				? filteredItems.length - 1
				: prevIndex + 1
		);
	};

	const handleEnter = () => {
		if (isModalOpen && filteredItems.length > 0) {
			onClickHandler(filteredItems[selectedIndex].url);
		}
	};

	useKeyPress(handleArrowUp, "ArrowUp");
	useKeyPress(handleArrowDown, "ArrowDown");
	useKeyPress(handleEnter, "Enter");
	useCombinedKeyPress(handleModalOpen, "k");

	const searchInputRef = useRef<InputRef | null>(null);
	const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

	const handleAfterOpen = () => {
		if (searchInputRef.current) {
			searchInputRef.current.focus();
		}
	};

	useEffect(() => {
		setFilteredItems(
			items.filter((item) =>
				item.name.toLowerCase().includes(input.toLowerCase())
			)
		);
	}, [input]);

	useEffect(() => {
		const selectedItemRef = itemRefs.current[selectedIndex];
		if (selectedItemRef) {
			selectedItemRef.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
			});
		}
	}, [selectedIndex]);

	return (
		<Modal
			onCancel={handleModalOpen}
			title="Features"
			open={isModalOpen}
			footer={[]}
			keyboard={true}
			afterOpenChange={handleAfterOpen}
			className={isDarkMode ? "dark" : "light"}
		>
			<Search
				placeholder="What do you need?"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				ref={searchInputRef}
				allowClear
				autoFocus
			/>
			<div
				className={classNames(
					style.popsearch__container,
					"search_container"
				)}
			>
				{filteredItems.map((item, index) => (
					<button
						onClick={() => onClickHandler(item.url)}
						ref={(el) => (itemRefs.current[index] = el)}
						key={item.url}
						className={classNames(
							style.popsearch__container_item,
							selectedIndex === index
								? style.popsearch__container_item_selected
								: "",
							isDarkMode
								? style.popsearch__container_item_dark
								: style.popsearch__container_item_light
						)}
					>
						<Icon name={item.icon as IconName} />
						<p>{item?.name}</p>
					</button>
				))}
			</div>
		</Modal>
	);
};

export default PopupSearch;
