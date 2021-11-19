import type {ValueOf} from '@browk-ui/types';

export const ThemeVariants = {
  DEFAULT: 'default',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ThemeVariants = ValueOf<typeof ThemeVariants>;
