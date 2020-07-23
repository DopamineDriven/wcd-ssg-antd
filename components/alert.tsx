import Container from './container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '../lib/constants';
import alertStyles from './alert-styles.module.css';
import GithubOutlined from '@ant-design/icons/GithubOutlined';

type Props = {
	preview?: boolean;
};

const Alert = ({ preview }: Props) => {
	return (
		<div
			className={cn(alertStyles.outterDiv, {
				'alert-action-seven': preview,
				'alert-action-one': !preview
			})}
		>
			<Container>
				<div className={alertStyles.containerDiv}>
					{preview ? (
						<>
							This is a page preview.{' '}
							<a href='/api/exit-preview' className={alertStyles.ifAnchor}>
								Click here
							</a>{' '}
							to exit preview mode.
						</>
					) : (
						<>
							The source code for this website is available &rarr;{' '}
							<a
								href={`https://github.com/DopamineDriven/${EXAMPLE_PATH}`}
								className={alertStyles.elseAnchor}
							>
								<GithubOutlined />
							</a>
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Alert;