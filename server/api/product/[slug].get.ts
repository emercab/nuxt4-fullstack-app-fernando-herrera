export default defineEventHandler(async (event) => {
  // Get slug from url
  const slug = getRouterParam(event, 'slug');

  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
  });

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
      message: `Product with slug ${slug} not found`,
      data: {
        slug,
        state: process.env.STAGE,
      },
      stack: process.env.STAGE !== 'production' ? new Error().stack : '',
    });
  }

  return product;
});
