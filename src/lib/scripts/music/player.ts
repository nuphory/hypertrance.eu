import { EuterpeBuilder } from '@euterpe.js/euterpe';
import { db } from './db';
export const player = new EuterpeBuilder(document.createElement('audio'), db).build();
