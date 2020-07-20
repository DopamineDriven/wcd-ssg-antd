import Button from "antd/lib/button";
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined";

type Props = {
	linkedin: string;
};

const Linkedin = ({ linkedin }: Props) => {
	return (
		<Button
			href={linkedin}
			target="__blank"
			className="user-social-media-button"
			shape="round"
			icon={
				<LinkedinOutlined key="linkedin" className="user-social-media-icon" />
			}
		/>
	);
};

export default Linkedin;