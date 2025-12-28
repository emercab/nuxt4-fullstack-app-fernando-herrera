import { z } from 'zod';
import bcrypt from 'bcryptjs';

const bodySchema = z.object({
  email: z
    .string()
    .toLowerCase()
    .trim()
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Email is not valid',
    }),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Bad credentials' });
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);

  if (!isValidPassword) {
    throw createError({ statusCode: 401, statusMessage: 'Bad credentials' });
  }

  // Login exitoso, creamos la sesión
  const userSession = {
    id: user.id,
    email: user.email,
    name: user.name,
    roles: user.roles,
  };

  await setUserSession(event, userSession);

  return {
    message: 'User logged in successfully',
    user: userSession,
  };
});
