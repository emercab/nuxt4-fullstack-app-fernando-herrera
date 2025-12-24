export default defineEventHandler(async (event) => {
  const reviews = await prisma.siteReview.findMany({
    take: 10,
    select: { name: true, subtitle: true, description: true, profileImage: true },
    orderBy: {
      id: 'desc',
    },
  });

  return reviews;
});
