FROM node:16.20.1

RUN apt-get update && apt-get install python3-pip -y

WORKDIR /app

COPY . .

RUN npm install

ENV PIP_ROOT_USER_ACTION=ignore

# RUN apt-get -y install python3-venv
# RUN python3 -m venv venv
# RUN chmod +x ./venv/bin/activate
# RUN source ./venv/bin/activate
RUN python3 -m pip install -r requirements.txt

CMD [ "node", "server.js" ]
