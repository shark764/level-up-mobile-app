import React from 'react';
import Snackbar from '../Snackbar';
import renderer from 'react-test-renderer';

describe('<Snackbar />', () => {
  it('renders correctly', async () => {
    const result = renderer
      .create(
        <Snackbar type='success' visible={true} onDismiss={() => {}}>
          Hello world
        </Snackbar>
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
