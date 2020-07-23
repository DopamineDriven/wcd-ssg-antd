import { ReactNode } from 'react';
import Meta from './meta';
import Footer from './footer';

type Props = {
	children: ReactNode;
	preview?: boolean;
};

const AppLayout = ({ children, preview }: Props) => {
	return (
		<>
			<Meta />
			<div className='app-layout'>
				<main>{children}</main>
			</div>
			<Footer preview={preview} />
		</>
	);
};

export default AppLayout;
