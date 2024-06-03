import { z } from 'zod';
import Collection from './Collection';
import ACollection from './ACollection';
import BaseCollection from './BaseCollection';
import { PageInfo } from '../../simple-types';

export const Collections = z.object({
	edges: z.array(z.union([Collection, ACollection, BaseCollection])),
	pageInfo: PageInfo,
	totalCount: z.number().int()
});

export default Collections;
