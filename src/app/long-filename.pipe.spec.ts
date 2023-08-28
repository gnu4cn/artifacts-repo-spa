import { LongFilenamePipe } from './long-filename.pipe';

describe('LongFilenamePipe', () => {
  it('create an instance', () => {
    const pipe = new LongFilenamePipe();
    expect(pipe).toBeTruthy();
  });
});
