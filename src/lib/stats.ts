export interface SessionStats {
  sessionTotal: number;
  sessionCorrect: number;
  sessionAccuracy: number;
}

export function applyAnswer(
  stats: SessionStats,
  isCorrect: boolean
): SessionStats {
  const next = {
    ...stats,
    sessionTotal: stats.sessionTotal + 1,
    sessionCorrect: isCorrect ? stats.sessionCorrect + 1 : stats.sessionCorrect
  };

  return {
    ...next,
    sessionAccuracy:
      next.sessionTotal > 0
        ? Math.round((next.sessionCorrect / next.sessionTotal) * 100)
        : 0
  };
}

export function resetSessionStats(): SessionStats {
  return {
    sessionTotal: 0,
    sessionCorrect: 0,
    sessionAccuracy: 0
  };
}
