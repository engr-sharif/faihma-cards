import { describe, expect, it } from 'vitest';
import { applyAnswer, resetSessionStats } from '../../src/lib/stats';

describe('stats reducers', () => {
  it('increments total and correct for correct answer', () => {
    const next = applyAnswer(
      { sessionTotal: 0, sessionCorrect: 0, sessionAccuracy: 0 },
      true
    );
    expect(next).toEqual({
      sessionTotal: 1,
      sessionCorrect: 1,
      sessionAccuracy: 100
    });
  });

  it('increments total only for incorrect answer', () => {
    const next = applyAnswer(
      { sessionTotal: 1, sessionCorrect: 1, sessionAccuracy: 100 },
      false
    );
    expect(next.sessionTotal).toBe(2);
    expect(next.sessionCorrect).toBe(1);
    expect(next.sessionAccuracy).toBe(50);
  });

  it('resets session stats', () => {
    expect(resetSessionStats()).toEqual({
      sessionTotal: 0,
      sessionCorrect: 0,
      sessionAccuracy: 0
    });
  });
});
