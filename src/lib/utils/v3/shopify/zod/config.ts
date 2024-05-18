import { z } from 'zod';

import type { ApiClientLogger, CustomFetchApi } from '@shopify/graphql-client';

const apiVersion = z.enum(['2023-07', '2023-10', '2024-01', '2024-04', '2024-07']);

const requestParams = z.tuple([
	z.string(),
	z
		.object({
			method: z.enum(['GET', 'POST', 'PUT', 'DELETE']).optional(),
			headers: z.custom<HeadersInit>().optional(),
			body: z.union([z.string(), z.record(z.unknown())]).optional()
		})
		.optional()
]);

const logContent = z.union([
	z.string(),
	z.object({
		apiVersion: z.string(),
		supportedApiVersions: z.array(z.string())
	}),
	z.object({
		requestParams,
		response: z.custom<Response>()
	}),
	z.object({
		requestParams,
		lastResponse: z.custom<Response>(),
		retryAttempt: z.number().int(),
		maxRetries: z.number().int()
	})
]);

const config = z.object({
	storeDomain: z.string(),
	apiVersion: apiVersion,
	publicAccessToken: z.string().optional(),
	privateAccessToken: z.string().startsWith('shpat_').optional(),
	clientName: z.string().optional(),
	retries: z.number().int().min(0).max(3).optional(),
	customFetchApi: z.custom<CustomFetchApi>(),
	logger: z.custom<ApiClientLogger>()
});

export default config;
export { config, logContent, requestParams };
