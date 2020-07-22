import { ReactNode } from 'react';
import containerStyles from './container-styles.module.css';

type Props = {
	children?: ReactNode;
};

const Container = ({ children }: Props) => {
	return <div className={containerStyles.container}>{children}</div>;
};

export default Container;
