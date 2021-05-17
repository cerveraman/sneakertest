FROM node:12-alpine
WORKDIR /usr/sneakertest/
COPY package.json .
RUN npm install
COPY . /usr/sneakertest/
CMD ["npm", "start"]
