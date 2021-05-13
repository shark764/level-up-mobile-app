import React from 'react';
import { App } from '../index';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: ({ children }: any) => <>{children}</>
}));

describe('<App />', () => {
  it('renders correctly', async () => {
    const result = renderer.create(<App />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
