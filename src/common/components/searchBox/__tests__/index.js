import SearchBox from '../';
import renderer from 'react-test-renderer';

test('SearchBox renders correctly', async () => {
	const tree = renderer.create(<SearchBox onSearch={() => {}}/>).toJSON();

	expect(tree).toMatchSnapshot();
});
