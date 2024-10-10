# Stage 1
FROM node:22 as build-stage

WORKDIR /front
COPY package.json . 
RUN npm install --legacy-peer-deps
COPY . .

ARG FRONT_APP_API_BASE_URL
ENV FRONT_APP_API_BASE_URL=$FRONT_APP_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /front/dist/test-jwt-auth/browser /usr/share/nginx/html

COPY .htaccess /usr/share/nginx/html/.htaccess
COPY nginx.conf /etc/nginx/nginx.conf   

EXPOSE $FRONT_DOCKER_PORT

CMD nginx -g 'daemon off;'
