import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import userUser from './use-users';

describe('useUsers', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => userUser());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
