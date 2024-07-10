import { z } from 'zod';

const Image = z.object({
	url: z.string(),
	height: z.number().optional().nullable(),
	width: z.number().optional().nullable(),
	altText: z.string().optional().nullable()
});

const ExternalVideo = z.object({
	alt: z.string(),
	embedUrl: z.string(),
	host: z.string(),
	id: z.string(),
	mediaContentType: z.string(),
	originUrl: z.string(),
	previewImage: Image
});

const GenericFile = z.object({
	alt: z.string().optional().nullable(),
	id: z.string(),
	mimeType: z.string().optional().nullable(),
	originalFileSize: z.number().optional().nullable(),
	previewImage: Image.optional().nullable(),
	url: z.string().optional().nullable()
});

const MediaImage = z.object({
	alt: z.string().optional().nullable(),
	id: z.string(),
	image: Image.optional().nullable(),
	mediaContentType: z.string(),
	previewImage: Image.optional().nullable()
});

const Model3dSource = z.object({
	filesize: z.number(),
	format: z.string(),
	mimeType: z.string(),
	url: z.string()
});

const Model3d = z.object({
	id: z.string(),
	sources: z.array(Model3dSource)
});

const MoneyV2 = z.object({
	amount: z.string(),
	currencyCode: z.string()
});

const SEO = z.object({
	description: z.string().optional().nullable(),
	title: z.string().optional().nullable()
});

const Video = z.object({
	alt: z.string().optional().nullable(),
	id: z.string(),
	mediaContentType: z.string(),
	previewImage: Image.optional().nullable(),
	sources: z.array(
		z.object({
			format: z.string(),
			height: z.number(),
			mimeType: z.string(),
			url: z.string(),
			width: z.number()
		})
	)
});

const PageInfo = z.object({
	endCursor: z.string().optional().nullable(),
	hasNextPage: z.boolean(),
	hasPreviousPage: z.boolean(),
	startCursor: z.string().optional().nullable()
});

export function RefNodesArray<T extends z.ZodTypeAny>(schema: T) {
	return {
		references: z.object({
			nodes: z.array(schema as z.infer<T>)
		})
	};
}

export function RefEdgesNodeArray<T extends z.ZodTypeAny>(schema: T) {
	return {
		references: z.object({
			edges: z.array(z.object({ node: schema as z.infer<T> }))
		})
	};
}

export {
	ExternalVideo,
	GenericFile,
	Image,
	MediaImage,
	Model3d,
	Model3dSource,
	MoneyV2,
	PageInfo,
	SEO,
	Video
};
