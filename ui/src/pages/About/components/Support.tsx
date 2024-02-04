import { Button, List, Typography } from "antd";
import { FC } from "react";
import style from "pages/About/About.module.scss";
import { Icon } from "components/General";

const Support: FC = () => {
	return (
		<List
			header={<div>Support</div>}
			bordered
			dataSource={APP_SUPPORT}
			renderItem={(item) => (
				<List.Item>
					<Typography.Text>{item}</Typography.Text>
				</List.Item>
			)}
		/>
	);
};

export default Support;

const APP_SUPPORT = [
	<>
		Fancy giving this project a little love? Why not become a superstar
		through{" "}
		<Button
			type="primary"
			className={style.about__sponsor}
			onClick={() =>
				window.open(
					"https://github.com/sponsors/lifeparticle",
					"_blank",
					"noopener"
				)
			}
		>
			<Icon name="Heart" className="heart" color="red" />

			<span>GitHub Sponsors</span>
		</Button>{" "}
		? Whether you choose to shower us with monthly sprinkles of support or a
		one-time generosity bomb, your backing truly counts! Remember, your
		contribution helps keep our gears grinding and our spirits soaring. So,
		come on board and make a difference!
	</>,
];
