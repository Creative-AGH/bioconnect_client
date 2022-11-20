FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json .
COPY create_env_file.sh .
ADD . /usr/src/app
ENV NODE_OPTIONS=--openssl-legacy-provider
ARG REACT_APP_BACKEND_URL \
    NODE_ENV
RUN sh create_env_file.sh REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL \
                          NODE_ENV=$NODE_ENV
RUN npm install --legacy-peer-deps && \
    npm run build && \
    npm cache clean -f && \
    npm install -g serve
CMD [ "serve", "-s", "build" ]
EXPOSE 3000