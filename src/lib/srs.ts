export interface ProgressState {
  easeFactor?: number;
  interval?: number;
  repetitions?: number;
}

export interface SrsResult {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReview: number;
  lastReview: number;
}

export function sm2(
  progress: ProgressState,
  quality: 0 | 1 | 2 | 3,
  now = Date.now()
): SrsResult {
  const q = [1, 2, 4, 5][quality] ?? 2;

  let ef = progress.easeFactor ?? 2.5;
  let interval = progress.interval ?? 0;
  let reps = progress.repetitions ?? 0;

  if (q < 3) {
    reps = 0;
    interval = quality === 0 ? 0.0007 : 0.002;
  } else {
    reps += 1;
    if (reps === 1) {
      interval = 1;
    } else if (reps === 2) {
      interval = 3;
    } else {
      interval = Math.round(interval * ef);
    }

    if (q === 5) {
      interval = Math.round(interval * 1.3);
    }
  }

  ef = ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  ef = Math.max(1.3, ef);
  interval = Math.min(interval, 365);

  return {
    easeFactor: Math.round(ef * 100) / 100,
    interval,
    repetitions: reps,
    nextReview: now + interval * 86400000,
    lastReview: now
  };
}
