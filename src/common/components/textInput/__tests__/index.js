import renderer from 'react-test-renderer';
import TextInput from '..';

test('TextInput renders correctly', async () => {
	const tree = renderer.create(<TextInput/>).toJSON();
	expect(tree).toMatchSnapshot();
});
