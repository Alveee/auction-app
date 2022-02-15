const app = require("./src/server");
const dotenv = require("dotenv");
const dbConnection = require("./src/config/db");
dotenv.config();

dbConnection();

const port = process.env.PORT || 8080;

let server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.log('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    console.log(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
