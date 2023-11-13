import renderer from 'react-test-renderer';
import Button from '../';

test('renders button correctly', async () => {
	const tree = renderer.create(<Button>button</Button>).toJSON();
	expect(tree).toMatchSnapshot();
});
