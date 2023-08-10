import { z } from 'zod';
import { ProductByHandleQuery, ProductQuery, ProductsQuery } from './graphql/product';
import { ProductResult, SelectedOptionResult } from './schemas/product';
import { makeShopifyRequest } from './client';

export async function getProducts(options: {
	first?: number;
	after?: string;
	first_collections?: number;
	first_images?: number;
	first_variants?: number;
	query?: string;
}) {
	const { first = 25, after, first_collections, first_images, first_variants, query } = options;

	const data = await makeShopifyRequest(ProductsQuery, {
		first,
		after,
		first_collections,
		first_images,
		first_variants,
		query
	});
	const { products } = data;

	if (!products) {
		throw Error('No products found');
	}

	const productsList = products.edges.map((edge: any) => edge.node);
	const ProductsResult = z.array(ProductResult);
	const parsedProducts = ProductsResult.parse(productsList);

	return parsedProducts;
}

export async function getProduct(options: {
	id?: string;
	handle?: string;
	first_collections?: number;
	first_images?: number;
	first_variants?: number;
	selectedOptions?: z.infer<typeof SelectedOptionResult>[];
	hasSelectedOptions?: boolean;
}) {
	const { id, handle } = options;

	if (!id && !handle) {
		throw Error('You must provide either an id or a handle');
	}

	const input = {
		...options,
		...(id && { id }),
		...(handle && { handle }),
		hasSelectedOptions: options.selectedOptions?.length
			? options.selectedOptions?.length > 0
			: false
	};

	const data = await makeShopifyRequest(ProductQuery, input);
	const { product } = data;

	const parsedProduct = ProductResult.parse(product);

	return parsedProduct;
}

export async function getProductByHandle(options: {
	handle: string;
	first_collections?: number;
	first_images?: number;
	first_variants?: number;
	selectedOptions?: z.infer<typeof SelectedOptionResult>[];
	hasSelectedOptions?: boolean;
}) {
	const input = {
		...options,
		hasSelectedOptions: options.selectedOptions?.length
			? options.selectedOptions?.length > 0
			: false
	};

	const data = await makeShopifyRequest(ProductByHandleQuery, input);
	const { productByHandle } = data;

	if (productByHandle.options.length === 1 && productByHandle.options[0].name === 'Title') {
		productByHandle.options = [];
	}

	const parsedProduct = ProductResult.parse(productByHandle);

	return parsedProduct;
}

export async function getProductRecommendations(options: { productId: string }) {
	const { productId } = options;

	const data = await makeShopifyRequest(ProductQuery, { productId });
	const { product } = data;

	const parsedProduct = ProductResult.parse(product);

	return parsedProduct;
}
