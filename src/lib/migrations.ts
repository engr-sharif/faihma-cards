export interface ImportedData {
  progress?: Record<string, Record<string, unknown>>;
  stats?: Record<string, unknown>;
}

export interface NormalizedData {
  progress: Record<string, Record<string, unknown>>;
  stats: {
    sessionTotal: number;
    sessionCorrect: number;
    sessionAccuracy: number;
    studyStreak: number;
    startTime: number;
  };
}

export function migrateProgressData(
  input: ImportedData,
  now = Date.now()
): NormalizedData {
  const progress = input.progress ?? {};
  const rawStats = input.stats ?? {};

  return {
    progress,
    stats: {
      sessionTotal: Number(rawStats.sessionTotal ?? 0),
      sessionCorrect: Number(rawStats.sessionCorrect ?? 0),
      sessionAccuracy: Number(rawStats.sessionAccuracy ?? 0),
      studyStreak: Number(rawStats.studyStreak ?? rawStats.streak ?? 0),
      startTime: Number(rawStats.startTime ?? now)
    }
  };
}

export function resetProgressState() {
  return {
    progress: {},
    stats: {
      sessionTotal: 0,
      sessionCorrect: 0,
      sessionAccuracy: 0,
      studyStreak: 0,
      startTime: Date.now()
    }
  };
}
