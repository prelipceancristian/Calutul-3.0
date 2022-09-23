FROM node:alpine

COPY . /app

WORKDIR /app

#CMD ./docker.sh
RUN npm install dotenv discord.js axios ytdl-core @discordjs/voice ffmpeg-static

CMD node index.js