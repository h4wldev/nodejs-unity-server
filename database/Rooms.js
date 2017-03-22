/**
 * Created by h4wldev on 2017. 3. 22..
 */

import Room from '../game/Room';
import { TypeException } from '../handlers/Exceptions';

export default class Rooms {
    constructor() {
        this.rooms = {};
    }

    get() {
        return this.rooms;
    }

    create(room) {
        let i = 0;

        if (room.constructor != new Room().constructor)
            throw new TypeException("asd");

        if (Object.keys(this.rooms).length) {
            for (i = 0; i <= Object.keys(this.rooms).length; i++) {
                if (this.rooms[i] === undefined) {
                    this.rooms[i] = room;
                    break;
                }
            }
        } else {
            this.rooms[0] = room;
        }

        this.rooms[i].no = i;
        return i;
    }

    destroy(room) {
        if (this.rooms[room.no] !== undefined) {
            delete this.rooms[room.no];
        }
    }
}