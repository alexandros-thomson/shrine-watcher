FROM node:18-alpine

WORKDIR /app

# Copy package files and install if present
COPY package*.json ./

RUN if [ -f package.json ]; then npm ci --only=production; fi

# Copy source
COPY . .

EXPOSE 3000

CMD ["node", "shrine-watcher.js"]