import { LogLevel, LogLevels } from './types';

export interface LocalTrackOptions {
  /**
   * @deprecated
   */
    logLevel: LogLevel | LogLevels;
    name?: string;
  }
