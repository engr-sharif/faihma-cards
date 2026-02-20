import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/dom';
import {
  exportProgress,
  importProgress,
  resetAll,
  runStudyStep
} from '../../src/lib/study-flow';

describe('study flow integration', () => {
  it('updates stats in DOM as answers are submitted', () => {
    document.body.innerHTML = '<div id="sessionAccuracy">0%</div>';
    let stats = { sessionTotal: 0, sessionCorrect: 0, sessionAccuracy: 0 };

    stats = runStudyStep(stats, true);
    expect(screen.getByText('100%')).toBeInTheDocument();

    stats = runStudyStep(stats, false);
    expect(stats.sessionTotal).toBe(2);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('supports export/import and reset flows', () => {
    const payload = exportProgress(
      { card1: { correct: 2 } },
      { sessionTotal: 2, sessionCorrect: 1, sessionAccuracy: 50 }
    );

    const imported = importProgress(payload);
    expect(imported.progress.card1).toEqual({ correct: 2 });
    expect(imported.stats.sessionAccuracy).toBe(50);

    expect(resetAll()).toEqual({
      sessionTotal: 0,
      sessionCorrect: 0,
      sessionAccuracy: 0
    });
  });
});
