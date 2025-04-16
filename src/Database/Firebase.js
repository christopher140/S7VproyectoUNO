import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAuth } from 'firebase-admin/auth';

import fs from 'fs';

import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.resolve(__dirname, '../../' + process.env.FIREBASE_KEY);
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));    
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();
const auth = getAuth()

export { db, auth };
