import {DeviceEventEmitter, NativeEventEmitter, NativeModules,} from 'react-native';
import {NATIVE_MODULE} from './NativeMethodUtil';

const postEvent = (event, value) => {
  DeviceEventEmitter.emit(event, value);
};

const registerEvent = (event, callback) => {
  return DeviceEventEmitter.addListener(event, value => {
    if (callback) {
      callback(value);
    }
  });
};

const registerEventToNative = (event, callback) => {
  if (!NativeModules[NATIVE_MODULE]) {
    return;
  }
  return new NativeEventEmitter(NativeModules[NATIVE_MODULE]).addListener(
    event,
    value => {
      if (callback) {
        callback(value);
      }
    },
  );
};

const registerLoginEvent=(callback)=>{
    return registerEvent(EVENT_ON_LOGIN,callback);
};

const registerLogoutEvent=(callback)=>{
    return registerEvent(EVENT_ON_LOGOUT,callback);
};

const registerLoginEventToNative=(callback)=>{
  return registerEventToNative(EVENT_ON_LOGIN,callback);
};

const registerLogoutEventToNative=(callback)=>{
  return registerEventToNative(EVENT_ON_LOGOUT,callback);
};

const EVENT_ON_LOGIN = 'EVENT_ON_LOGIN'; //登录成功
const EVENT_ON_LOGOUT = 'EVENT_ON_LOGOUT'; //退出登录


const EventUtil = {
  postEvent,
  registerEvent,
  registerEventToNative,
  registerLoginEvent,
  registerLogoutEvent,
  registerLoginEventToNative,
  registerLogoutEventToNative,
  EVENT_ON_LOGIN,
  EVENT_ON_LOGOUT,
};

module.exports = EventUtil;