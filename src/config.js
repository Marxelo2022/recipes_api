require('dotenv').config()

const config = {
    port: process.env.Port || 9000,
    nodeEnv: process.env.Node_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'root',
        dbName: process.env.DB_NAME
    }
};

module.exports = config