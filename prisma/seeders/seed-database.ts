import 'dotenv/config';
import { prisma } from '../../server/utils/db';
import { faker } from '@faker-js/faker';
import { productsFake } from './products-fake';

const seedDatabase = async () => {
  // 1. Purgar DB antes de sembrar
  console.log('Purgando datos antiguos...');
  await prisma.siteReview.deleteMany();
  await prisma.product.deleteMany();

  // 2. Sembrar datos ficticios de reviews
  console.log('Creando datos ficticios...');
  const siteReviews = faker.helpers.multiple(
    () => {
      return {
        name: faker.person.fullName(),
        subtitle: faker.company.catchPhrase(),
        description: faker.lorem.paragraphs(1),
        profileImage: faker.image.urlPicsumPhotos({ width: 200, height: 200 }),
        createdAt: faker.date.past(),
      };
    },
    { count: 50 }
  );

  // 3. Insertar datos en la base de datos
  console.log('Sembrando datos en la base de datos...');
  await prisma.siteReview.createMany({
    data: siteReviews,
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: productsFake,
  });

  console.log('Database seeded successfully.');
};

seedDatabase()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
