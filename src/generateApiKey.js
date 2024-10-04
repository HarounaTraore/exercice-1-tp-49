import { randomBytes } from 'crypto';

const apiKey = randomBytes(20).toString('hex');
console.log(`Votre clé API générée est : ${apiKey}`);
