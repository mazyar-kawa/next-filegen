"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFilename = generateFilename;
const uuid_1 = require("uuid");
const slugify_1 = require("slugify");
const crypto_js_1 = require("crypto-js");
/**
 * Generate filenames dynamically using various strategies.
 */
function generateFilename(defaultFilename, extension, strategy = 'random', options = {}) {
    let filename = defaultFilename;
    switch (strategy) {
        case 'random':
            filename = Math.random().toString(36).substring(2, 10);
            break;
        case 'uuid':
            filename = (0, uuid_1.v4)();
            break;
        case 'timestamp':
            filename = new Date().toISOString().replace(/[-:.]/g, '_');
            break;
        case 'date':
            filename = new Date().toISOString().split('T')[0];
            break;
        case 'numbered':
            filename = options.number
                ? `${defaultFilename}_${options.number}`
                : defaultFilename;
            break;
        case 'slug':
            filename = (0, slugify_1.default)(defaultFilename, { lower: true, strict: true });
            break;
        case 'hash':
            filename = (0, crypto_js_1.MD5)(defaultFilename).toString();
            break;
        case 'incremental':
            filename = `${defaultFilename}_${Date.now()}`;
            break;
        default:
            throw new Error(`Unsupported strategy: ${strategy}`);
    }
    return `${options.prefix || ''}${filename}${options.suffix || ''}.${extension}`;
}
