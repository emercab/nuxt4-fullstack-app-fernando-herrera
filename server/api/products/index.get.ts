export default defineEventHandler(async (event) => {
  // Get query parameters
  const query = getQuery(event);

  // Extract pagination parameters with defaults
  let limit = parseInt(query.limit as string);
  let offset = parseInt(query.offset as string);

  // Validate and set default values
  if (isNaN(limit) || limit <= 0) limit = 10;
  if (limit > 50) limit = 50; // Enforce a maximum limit for performance
  if (isNaN(offset) || offset < 0) offset = 0;

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      take: limit,
      skip: offset,
    }),
    prisma.product.count(),
  ]);

  const totalPages = Math.ceil(total / limit);
  const currentPage = offset / limit + 1;

  return {
    products,
    totalPages,
    currentPage,
    perPage: limit,
    total,
  };
});
