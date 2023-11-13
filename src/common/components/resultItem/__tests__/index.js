import ResultItem from '../';
import renderer from 'react-test-renderer';

test('ResultItem renders correctly', async () => {
	const tree = renderer.create(<ResultItem onClick={() => {}} item={{
		picture: 'picture',
		title: 'title',
		price: {
			amount: 3000,
			currency: 'COP'
		},
		city: 'city'
	}}/>).toJSON();

	expect(tree).toMatchSnapshot();

});
