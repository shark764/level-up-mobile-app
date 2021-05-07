/**
 * @format
 */

import 'react-native';
import React from 'react';
import { App } from '../index';
// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';

describe('<App />', () => {
  it('renders correctly', async (done) => {
    const result = renderer.create(<App />);
    await act(async () => {
      expect(result).toMatchSnapshot();
    });
    done();
  });
});
