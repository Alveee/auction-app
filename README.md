# Auction app

This project is about a web auction application for an antique items seller. The application
will allow users to bid on antique items displayed in the site.

This application is divided into 2 sections. Frontend part is built with Reactjs and server side is build with express.js. For databases, we have used mongodb.

---

### Setup

### Backend Installation

After cloning the project

- run `cd server` command to change directory
- run `npm install` command to download all the dependencies
- create a new file named `.env` in the root directory of server folder
- copy the content from the `.env.example` and paste it into `.env` file
- run `node index.js`

### Database setup

We have used mongodb cloud service named ATLAS to manage our database. Please follow this steps to create your cluster and database:
https://docs.atlas.mongodb.com/getting-started/

After creating cluster and database, you'll get a connection string. Copy this string and set this value to `ATLAS_URI` key in `.env` file into `server` folder.

Import the `products.json` and `user.json` from the dataset folder to your database.

### Frontend Installation

After cloning the project

- run `cd client` command to change directory
- run `npm install` command to download all the dependencies
- run `npm run start` command to start the frontend application. This will open a new window in web browser
