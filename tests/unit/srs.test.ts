import { describe, expect, it } from 'vitest';
import { sm2 } from '../../src/lib/srs';

describe('sm2', () => {
  it('resets interval for again', () => {
    const result = sm2(
      { easeFactor: 2.5, repetitions: 2, interval: 3 },
      0,
      1000
    );
    expect(result.repetitions).toBe(0);
    expect(result.interval).toBeCloseTo(0.0007);
    expect(result.nextReview).toBeGreaterThan(1000);
  });

  it('graduates correct answers', () => {
    const first = sm2({}, 2, 1000);
    const second = sm2(first, 2, 2000);
    expect(first.interval).toBe(1);
    expect(second.interval).toBe(3);
    expect(second.repetitions).toBe(2);
  });

  it('caps intervals at one year', () => {
    const result = sm2(
      { easeFactor: 3, repetitions: 10, interval: 500 },
      3,
      1000
    );
    expect(result.interval).toBe(365);
  });
});
