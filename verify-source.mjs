import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const file = new URL('../www/index.html', import.meta.url);
const buf = await readFile(file);
const sha256 = createHash('sha256').update(buf).digest('hex');
console.log(`www/index.html SHA-256: ${sha256}`);
console.log(`Bytes: ${buf.length}`);
console.log('This is a source-integrity check only; it does not validate financial calculations.');
