import { db } from './db';
import { Euterpe, EuterpeBuilder } from '@euterpe.js/euterpe';
export const player = new EuterpeBuilder(document.createElement('audio'), db).build();
