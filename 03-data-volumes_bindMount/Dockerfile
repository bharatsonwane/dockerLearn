FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

# anonymous volume should be write in commandline to overwrite bind mount
# VOLUME ["/app/node_modules"] 
# VOLUME ["/app/temp"] 

CMD ["npm", "start"]

