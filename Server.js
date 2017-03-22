/**
 * Created by h4wldev on 2017. 3. 22..
 */

import CONFIG from './Config';
import * as CTSHeader from './packet/CTSHeader';

import Room from './game/Room';
import Rooms from './database/Rooms';

import User from './game/User';


const io = require('socket.io')(process.env.PORT);

const rooms = new Rooms();

rooms.create(new Room(io, {
    title:  'hell o world',
    maxMember: 3
}));

rooms.create(new Room(io, {
    title:  'hell o world',
    maxMember: 3
}));

io.sockets.on("connection", (socket) => {
    console.log("A user connected");

    let user = new User(io, socket);

    socket.on('packet', (packet) => {
        switch (Number(packet.header)) {
            case CTSHeader.JOIN_ROOM:
                var room = rooms.get()[packet.body];

                if (room !== undefined) {
                    room.join(user);
                    console.log(room.getUsers());
                }
                break;
            case CTSHeader.LEAVE_ROOM:
                var room = rooms.get()[packet.body];

                if (room != undefined) {
                    if (!room.leave(user)) {
                        rooms.destroy(room);
                    } else {
                        console.log(room.getUsers());
                    }
                }
                break;
        }
    });
});
