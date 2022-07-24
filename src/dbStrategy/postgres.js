import pkg from 'pg';

const { Pool } = pkg;

const connection = new Pool ({
    host: 'host.docker.internal',
    port: 55000,
    user: 'postgres',
    password: 'postgrespw',
    database: 'boardcamp'

});

export default connection;