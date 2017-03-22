/**
 * Created by h4wldev on 2017. 3. 22..
 */


export default class User {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
        this.room = null;

        this.name = Math.random();
    }
    
    setRoom(key) {
        this.room = key;
    }
}

