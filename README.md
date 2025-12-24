# Mi sitio con Nuxt 4

Este es un ejemplo de un proyecto de un sitio web full stack creado con Nuxt 4.

## Instalación

1. Clona este repositorio:

```bash
git clone
```

2. Navega al directorio del proyecto:

```bash
cd mi-sitio-nuxt4
```

3. Instala las dependencias:

```bash
pnpm install
```

4. Configura las variables de entorno:
   Modifica el archivo `.env_template` con la configuración de la base de datos y renómbralo a `.env`.

5. Ejecuta el comando `npx prisma migrate dev` para crear las tablas en la base de datos.

6. Ejecuta el seeder para poblar la base de datos con datos iniciales:

```bash
pnpm run seed
```

7. Inicia el servidor de desarrollo:

```bash
pnpm run dev
```
