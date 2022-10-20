FROM node:16.18.0-buster

LABEL Name="next-react18-pokemon"
LABEL Version="1.0.0"

ENV GITHUB_USER_NAME=GITHUB-user-name
ENV GITHUB_TOKEN=GITHUB-token
ENV GITHUB_EMAIL=GITHUB-email

WORKDIR /
COPY ./init.sh init.sh

RUN mkdir -p /repo
VOLUME /repo
WORKDIR /repo

EXPOSE 3000
CMD ["bash", "/init.sh"]
