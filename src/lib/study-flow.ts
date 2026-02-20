import { applyAnswer, resetSessionStats, type SessionStats } from './stats';
import { migrateProgressData } from './migrations';

export function renderStats(stats: SessionStats) {
  const accuracy = document.getElementById('sessionAccuracy');
  if (accuracy) accuracy.textContent = `${stats.sessionAccuracy}%`;
}

export function runStudyStep(
  stats: SessionStats,
  isCorrect: boolean
): SessionStats {
  const next = applyAnswer(stats, isCorrect);
  renderStats(next);
  return next;
}

export function exportProgress(
  progress: Record<string, unknown>,
  stats: SessionStats
) {
  return JSON.stringify({
    progress,
    stats,
    exportDate: new Date().toISOString()
  });
}

export function importProgress(raw: string) {
  return migrateProgressData(JSON.parse(raw));
}

export function resetAll() {
  return resetSessionStats();
}
