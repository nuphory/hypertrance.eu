import { EuterpeBuilder } from '@euterpe.js/euterpe';
import { make } from './db';
export const player = new EuterpeBuilder(document.createElement('audio'), make(), { use_only_pathname_url: true }).build();

