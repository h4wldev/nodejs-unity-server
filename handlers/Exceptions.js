/**
 * Created by h4wldev on 2017. 3. 22..
 */


const env = process.env.NODE_ENV || 'development';

class Exception {
    constructor(exception, message) {
        if (env === 'development') {
            let error = Error(message);
            error.name = exception.name;

            return error;
        }

        console.error(`${exception.name}: ${message}`);
    }
}

export class TypeException extends Exception {
    constructor(message) {
        super(TypeException, message);
    }
}
