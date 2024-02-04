import { FC } from "react";
import { Card, Space, Typography } from "antd";
import { FEATURES } from "pages/Home/constants";
import style from "pages/Home/Home.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "components/General";

const { Text } = Typography;

const Features: FC = () => {
	return (
		<div className={style.home__features}>
			<div className={style.home__features_cards}>
				{FEATURES.map((feature) => (
					<div
						key={feature.id}
						className={style.home__features_cards_card}
					>
						<Link to={feature.link}>
							<Card
								bordered={false}
								hoverable
								className={
									style.home__features_cards_card_content
								}
							>
								<Space direction="vertical">
									<Icon name={feature.icon} size={40} />
									<Space direction="vertical" size="middle">
										<Text strong>{feature.title}</Text>
										<Text>{feature.description}</Text>
									</Space>
								</Space>
							</Card>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
