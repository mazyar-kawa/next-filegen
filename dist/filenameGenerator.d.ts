/**
 * Supported filename strategies.
 */
export type FilenameStrategy = 'random' | 'uuid' | 'timestamp' | 'date' | 'numbered' | 'slug' | 'hash' | 'incremental';
/**
 * Options for filename generation.
 */
interface FilenameOptions {
    prefix?: string;
    suffix?: string;
    format?: string;
    number?: number;
}
/**
 * Generate filenames dynamically using various strategies.
 */
export declare function generateFilename(defaultFilename: string, extension: string, strategy?: FilenameStrategy, options?: FilenameOptions): string;
export {};
