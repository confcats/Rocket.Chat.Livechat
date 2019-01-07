import loremIpsum from 'lorem-ipsum';
import mem from 'mem';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Modal from '.';


const memedIpsum = mem(loremIpsum);


const LoremIpsum = ({ padding = '5rem', count = 5, units = 'paragraphs', ...options }) => (
	<div style={{ padding }}>
		{memedIpsum({ count, units, ...options }).split('\n').map((paragraph) => <p>{paragraph}</p>)}
	</div>
);


storiesOf('Components|Modal', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('normal', () => (
		<div>
			<LoremIpsum />
			<Modal open={boolean('open', true)} animated={boolean('animated', false)} onDismiss={action('dismiss')}>
				{text('content', memedIpsum({ count: 1, units: 'paragraphs' }))}
			</Modal>
		</div>
	))
	.add('animated', () => (
		<div>
			<LoremIpsum />
			<Modal open={boolean('open', true)} animated={boolean('animated', true)} onDismiss={action('dismiss')}>
				{text('content', memedIpsum({ count: 1, units: 'paragraphs' }))}
			</Modal>
		</div>
	))
	.add('timeout', () => (
		<div>
			<LoremIpsum />
			<Modal
				open={boolean('open', true)}
				animated={boolean('animated', false)}
				timeout={number('timeout', 3000)}
				onDismiss={action('dismiss')}
			>
				{text('content', memedIpsum({ count: 1, units: 'paragraphs' }))}
			</Modal>
		</div>
	))
;
