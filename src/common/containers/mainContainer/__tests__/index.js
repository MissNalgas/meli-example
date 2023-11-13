import renderer from 'react-test-renderer';
import MainContainer from '..';

jest.mock('next/navigation', () => ({
	useRouter: () => ({})
}));

test('MainContainer renders correctly', async () => {

	const tree = renderer.create(<MainContainer>mainContainer</MainContainer>).toJSON();

	expect(tree).toMatchSnapshot();

});
