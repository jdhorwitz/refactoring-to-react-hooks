import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './UseFetch';
import 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';

describe('useFetch', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it('should return data with successful request', async () => {
    const { result } = renderHook(() => useFetch('test.com'));

    fetchMock.mock('test.com', {
      returnedData: 'foo',
    });

    expect(result.current.data).toBe({ returnedData: 'foo' });
  });
});
