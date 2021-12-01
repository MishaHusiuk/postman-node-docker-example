FROM node:14.16.1

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

COPY . .

RUN curl -LJO https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

# CMD ["node", "server.js"]
# CMD ["./scripts/wait-for-it.sh", "mongo:27017", "--", "node", "server.js"]
