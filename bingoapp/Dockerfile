# base image
FROM node:9.8

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV PATH /usr/src/app/node_modules:$PATH

# install and cache app dependencies
ADD ./package.json /usr/src/app/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]