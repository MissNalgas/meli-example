import BreadCrumps from '../';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

test('loads breadCrumps', async () => {
	render(<BreadCrumps/>);

	expect(screen.getByTestId('breadcrump')).toHaveTextContent('Electronica > iPod > Reproducciones > Ipod > 32');
});
