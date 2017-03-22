/**
 * Created by h4wldev on 2017. 3. 22..
 */

import CryptoJS from 'crypto-js';

import Config from '../Config';
import * as STCHeader from '../packet/STCHeader';

import User from './User';
import { TypeException } from '../handlers/Exceptions';


export default class Room {
    constructor(io, options) {
        this.io = io;
        this.options = options;

        this.key = CryptoJS.AES.encrypt(String(new Date().getTime()), Config.secretKey).toString();

        this.no = 0;
        this.leader = null;
        this.users = [];
    }

    /**
     * @return {Object.leader} User
     * @return {Object.users} User array
     */
    getUsers() {
        return {
            leader: this.leader,
            users: this.users
        };
    }

    /**
     * @param {User} user
     */
    join(user) {
        if (user.constructor != new User().constructor)
            throw new TypeException("asd");

        if (this.users.indexOf(user) < 0) {
            if (this.leader === null) {
                this.leader = user;
            }

            this.users.push(user);
            user.setRoom(this.key);
        }
    }

    /**
     * @param {User} user
     */
    leave(user) {
        if (this.users.indexOf(user) > -1) {
            this.users.splice(this.users.indexOf(user), 1);
            user.setRoom(null);

            this.send({
                header: STCHeader.LEAVE_ROOM,
                body: 'asd'
            });

            if (this.leader.name == user.name) {
                const newLeader = this.users[Math.floor(Math.random() * this.users.length)];
                this.leader = newLeader;

                this.send({
                    header: STCHeader.CHANGE_ROOM_SETTING,
                    body: { 'leader': newLeader.name }
                });
            }

            return this.users.length;
        }
    }

    /**
     * @param {Object} packet
     */
    send(packet) {
        this.users.forEach((user) => {
            user.socket.emit('packet', packet);
        });
    }
}
