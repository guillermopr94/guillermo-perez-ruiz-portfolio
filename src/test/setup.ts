import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll } from 'vitest';

// Mock IntersectionObserver for framer-motion viewport animations
beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver
    implements globalThis.IntersectionObserver
  {
    readonly root: Element | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: readonly number[] = [];
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
    unobserve() {}
  };
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
