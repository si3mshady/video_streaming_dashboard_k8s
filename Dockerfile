
FROM node:16-alpine as buildstage1
# Set the working directory to /app inside the container
ENV REACT_APP_NODE_URI_BASE=http://35.171.193.192/
WORKDIR /app
COPY . .
RUN npm i --force
RUN npm run build

FROM nginx:latest


LABEL developer=ElliottLamarArnold

WORKDIR /usr/share/nginx/html

COPY --from=buildstage1 /app/build /usr/share/nginx/html

EXPOSE 80