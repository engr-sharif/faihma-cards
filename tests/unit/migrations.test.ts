import { describe, expect, it } from 'vitest';
import {
  migrateProgressData,
  resetProgressState
} from '../../src/lib/migrations';

describe('migrations', () => {
  it('fills missing defaults', () => {
    const migrated = migrateProgressData({}, 1234);
    expect(migrated.progress).toEqual({});
    expect(migrated.stats.startTime).toBe(1234);
    expect(migrated.stats.studyStreak).toBe(0);
  });

  it('maps legacy streak to studyStreak', () => {
    const migrated = migrateProgressData({ stats: { streak: 7 } }, 1234);
    expect(migrated.stats.studyStreak).toBe(7);
  });

  it('creates reset payload', () => {
    const reset = resetProgressState();
    expect(reset.progress).toEqual({});
    expect(reset.stats.sessionTotal).toBe(0);
  });
});
