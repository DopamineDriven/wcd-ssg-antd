import { ReactNode } from 'react';
import Meta from './meta';
import Footer from './footer';
import Alert from './alert';

type Props = {
	children: ReactNode;
	preview?: boolean;
};

const AppLayout = ({ children, preview }: Props) => {
	return (
		<>
			<Meta />
			<div className='app-layout'>
				<Alert preview={preview} />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default AppLayout;
