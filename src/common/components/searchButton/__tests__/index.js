import renderer from 'react-test-renderer';
import SearchButton from '../';

test('SearchButton renders correctly', async () => {
	const tree = renderer.create(<SearchButton/>).toJSON();
	expect(tree).toMatchSnapshot();
});
