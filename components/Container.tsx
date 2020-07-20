import { ReactNode, FunctionComponent } from "react";
import componentStyles from "./component-styles.module.css";
type Props = {
	children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
	return <div className={componentStyles.containerDiv}>{children}</div>;
};

export default Container;
