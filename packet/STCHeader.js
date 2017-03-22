/**
 * Created by h4wldev on 2017. 3. 22..
 */


/**
 * Account related packet headers
 * @type {number}
 */
export const LOGIN = 0x00;
export const REGISTER = 0x01;
export const MODIFY_ACCOUNT = 0x02;

/**
 * Room related packet headers
 * @type {number}
 */
export const JOIN_ROOM = 0x10;
export const LEAVE_ROOM = 0x11;
export const KICK_ROOM = 0x12;
export const CHANGE_ROOM_SETTING = 0x13;
export const MOVE_TEAM = 0x14;

export const CHAT = 0x15;

/**
 * Game related packet headers
 * @type {number}
 */
export const START_GAME = 0x20;
export const PAUSE_GAME = 0x21;
export const STOP_GAME = 0x22;
export const MOVE_CHARACTER = 0x23;
export const KICK_BALL = 0x24;
export const PASS_BALL = 0x25;