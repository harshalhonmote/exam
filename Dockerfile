FROM node
WORKDIR /public
COPY . .
EXPOSE 4000
CMD node index.js