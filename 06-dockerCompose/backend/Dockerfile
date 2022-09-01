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
