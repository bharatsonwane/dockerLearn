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

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=secret

# Start the app
CMD ["npm", "start"]


# ------------------------------------------------
# PRODUCTION
#  **Production 1st stage**
FROM node:16 AS builder

ENV NODE_ENV production
# Add a work directory

WORKDIR /app
# Cache and Install dependencies

COPY package.json .

RUN npm install --production

# Copy app files
COPY . .

# Build
RUN npm run build

# **Production 2nd stage**
FROM node:16 AS production

# Copy built assets/bundle from the builder
COPY --from=builder /app/build .

EXPOSE 82

# Start the app
CMD node nodeServer.js
