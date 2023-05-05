import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import Author from '..';

describe('Author component', () => {
  it('renders correctly', () => {
    const username = 'test-author';
    const { container } = render(
      <IntlProvider locale="en" onError={() => {}}>
        <Author username={username} size={60} />
      </IntlProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('does not render without a username', () => {
    const { container } = render(
      <IntlProvider locale="en" onError={() => {}}>
        <Author username="" size={0} />
      </IntlProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
