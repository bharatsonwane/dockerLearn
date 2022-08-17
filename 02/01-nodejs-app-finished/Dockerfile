FROM node:12

# docker working directory
WORKDIR /app

# COPY hostFileSystem image/containerFileSystem
COPY package.json /app

RUN npm install

# COPY . /app
COPY . .

# exposing port to local machine (optional)
EXPOSE 80

CMD ["node", "server.js"]