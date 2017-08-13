FROM node

RUN curl -sS http://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install yarn -y

ADD ./package.json /app/package.json
ADD ./yarn.lock /app/yarn.lock
WORKDIR /app
RUN yarn install

EXPOSE 9000
EXPOSE 9001

CMD ["yarn", "start"]
