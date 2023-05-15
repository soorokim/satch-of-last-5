FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN yarn install
ENV NODE_ENV=production
RUN yarn build
CMD ["yarn","serve"]

#FROM nginx:1.16.0-alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#RUN rm /etc/nginx/conf.d/default.conf
#COPY deploy/nginx/nginx.config /etc/nginx/conf.d
#EXPOSE 80
#CMD ["nginx","-g","daemon off;"]
