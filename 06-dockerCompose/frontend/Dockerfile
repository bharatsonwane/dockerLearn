FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

#These need to be passed when building the docker image (using --build-args parameter)
ARG REACT_APP_ENV_TITLE
ARG REACT_APP_BASE_URL

# env variable is used when container is running
ENV REACT_APP_ENV_TITLE $REACT_APP_ENV_TITLE
ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL

EXPOSE 3000

CMD [ "npm", "start" ]