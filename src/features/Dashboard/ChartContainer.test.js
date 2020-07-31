import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import ChartContainer from './ChartContainer';
const testContext = React.createContext();
const { Provider } = testContext;

const state = {
  loading: true,
  error: '',
  salesTotal: 0,
  subscriptionsTotal: 0,
  data: [{ timestamp: new Date().toISOString(), amount: 0 }],
};

test('shows the container', () => {
  render(
    <Provider value={state}>
      <ChartContainer selectedLabel="sales" />)
    </Provider>,
  );
});
