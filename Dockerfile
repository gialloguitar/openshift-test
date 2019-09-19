FROM php:7.2-cli
COPY app/ws /usr/src/ws
WORKDIR /usr/src/ws
EXPOSE 8889
CMD [ "php", "./server.php" ]
