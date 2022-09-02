# ------------------------------------------------
# DEVELOPMENT
FROM node:16 AS development

ENV NODEJS_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .

RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 80

ENV MONGODB_USERNAME=username
ENV MONGODB_PASSWORD=password

# Start the app
CMD ["npm", "start"]


# ------------------------------------------------
# PRODUCTION 
FROM node:16 AS production

ENV NODE_ENV production
# Add a work directory

WORKDIR /app
# Cache and Install dependencies

COPY package.json .

RUN npm install --omit=dev

# Copy app files
COPY . .

EXPOSE 82

ENV MONGODB_USERNAME=username
ENV MONGODB_PASSWORD=password

# Start the app
CMD ["npm", "run", "start-prod"]
