FROM node:alpine as builder
WORKDIR /usr/app/
COPY ./package.json ./
RUN npm install
COPY ./ ./
# CMD ["npm","run","build"]
RUN npm run build


FROM nginx:alpine
#using previous build of builder
COPY --from=builder /app/build /usr/share/nginx/html
