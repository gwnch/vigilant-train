export function readingTime(wordCount: number) {
  return `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
}

export const noteWordCounts = {
  about: 273,
  note001: 1366,
  note002: 529,
  note003: 1220,
  note004: 967,
  note005: 687,
  note006: 1090,
} as const;
