# Server setup
npm init -y
npm i prisma @prisma/client
npx prisma init
npm i -D ts-node typescript @types/node
npx tsc --init
npm i fs path 
npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm i express body-parser cors dotenv helmet morgan concurrently
npm i -D nodemon @types/cors @types/express @types/morgan

EC2 -hosting for backend
RDS -for postgres database
Amplify - for host nextjs
S3- for inventories