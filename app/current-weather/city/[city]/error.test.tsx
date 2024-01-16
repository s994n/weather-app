import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Error from './error';
import { NetworkError } from '@/utils/errors';

describe('Error component', () => {  
  it('renders the error message', () => {
    const networkErrorMessage = 'Failed to fetch current weather data';
    const networkError = new NetworkError(networkErrorMessage);
    const { getByText } = render(<Error error={networkError} reset={() => {}} />);
    expect(getByText(networkErrorMessage)).toBeInTheDocument();
  });
});
