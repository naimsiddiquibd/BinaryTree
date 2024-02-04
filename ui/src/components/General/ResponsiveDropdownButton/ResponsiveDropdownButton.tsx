import { Dropdown } from "antd";
import { FC } from "react";
import { withSize } from "components/Hoc";
import { DropdownButtonProps } from "antd/es/dropdown";

const DropdownButton: FC<DropdownButtonProps> = ({ children, ...props }) => {
	return <Dropdown.Button {...props}>{children}</Dropdown.Button>;
};

const ResponsiveDropdownButton = withSize(DropdownButton);
export default ResponsiveDropdownButton;
