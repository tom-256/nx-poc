import { myLib } from './my-lib';

describe('myLib', () => {
  it('should work', () => {
    expect(myLib()).toEqual('fixed-my-lib');
  });
});
