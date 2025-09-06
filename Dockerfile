FROM node:18-alpine AS builder
WORKDIR /app

# Install build-time dependencies (if any). Copy package files first to use cache.
COPY package*.json ./
RUN npm ci --silent

# Copy source and run optional build
COPY . .
# If package.json defines a "build" script, run it
RUN if grep -q "\"build\"" package.json 2>/dev/null; then npm run build; fi

# Final runtime image (smaller, non-root)
FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only what's needed from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

USER app

EXPOSE ${PORT}

# Lightweight healthcheck using node runtime
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD node -e "require('http').get({host:'127.0.0.1', port: process.env.PORT||3000, path:'/health'}, res => process.exit(res.statusCode===200?0:1)).on('error', ()=>process.exit(1))"

CMD ["node", "shrine-watcher.js"]