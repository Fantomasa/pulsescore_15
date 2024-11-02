FROM node:20.5

WORKDIR /nextjs

COPY . .

RUN npm install

RUN npx prisma generate

RUN npx prisma db push

RUN npm run build

CMD ["npm", "start"]