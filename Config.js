/**
 * Created by h4wldev on 2017. 3. 22..
 */

import path from 'path';


const env = process.env.NODE_ENV || 'development';

const CONFIG = {
    default: {
        env: env,
        path: path.normalize(__dirname),
        port: Number(process.env.PORT || 3000)
    },
    development: {
        host: '127.0.0.1',
        secretKey: '',
        database: {
            engine: 'mysql',
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'haxball'
        }
    },
    testing: {
        host: '127.0.0.1',
        secretKey: '',
        database: {
            engine: 'mysql',
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'haxball'
        }
    },
    production: {
        host: '127.0.0.1',
        secretKey: '',
        database: {
            engine: '',
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        }
    }
};

export default Object.assign(CONFIG.default, CONFIG[env]);
