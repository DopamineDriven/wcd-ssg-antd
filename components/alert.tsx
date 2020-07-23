import Container from './container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '../lib/constants';
import alertStyles from './alert-styles.module.css';
import GithubOutlined from '@ant-design/icons/GithubOutlined';
import ToolTip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';

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
							<a
								href={`https://github.com/DopamineDriven/${EXAMPLE_PATH}`}
								target='__blank'
								className={alertStyles.elseAnchor}
							>
								<ToolTip title='source code'>
									<span>
										<Button
											className='social-media-btn'
											shape='round'
											icon={
												<GithubOutlined
													key='github'
													className='social-media-icon'
												/>
											}
										/>
									</span>
								</ToolTip>
							</a>
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Alert;
