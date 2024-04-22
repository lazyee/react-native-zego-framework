import {updateLanguage} from "../utils/LanguageUtil";
import { Dimensions } from "react-native"
const {height, width} = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

let DEBUG = true;

//当前用户信息
let currentUserInfo = null;

//当前环境
let environment = null;

const ENV_RELEASE = "RELEASE"; //正式
const ENV_BETA = "BETA"; //缅甸灰度测试
const ENV_PRE = "PRE"; //预生产
const ENV_TEST_GZ = "TEST_GZ"; //广州测试 域名
const ENV_TEST_GZ_IP = "TEST_GZ_IP"; //广州测试  IP
const ENV_TEST_MMR = "TEST_MMR"; //缅甸测试
const ENV_CUSTOM = "CUSTOM"; //自定义域名

///初始化
const initProps=(props)=> {

    updateLanguage(props.language);
    let userInfo = props.userInfo;
    if(userInfo != null && typeof userInfo === 'object'){
        updateCurrentUserInfo(userInfo);
    }

    DEBUG = props.debug;
    environment = props.environment;
    if(!environment){
        environment = ENV_RELEASE;
    }
}

const isDebug=()=>{
    return DEBUG
};

const updateCurrentUserInfo=(userInfo)=>{
    currentUserInfo = userInfo;
}

const getCurrentUserInfo=()=>{
    return currentUserInfo;
}

/**
 * 是否已登录
 */
const isLogin=()=> {
    return AppConfig.getCurrentUserInfo() != null;
}

const getApiDomain=()=> {
    switch (environment) {
        case ENV_RELEASE :
            return "http://192.168.50.32:10003";
        case ENV_BETA :
        case ENV_PRE :
        case ENV_TEST_MMR :
            return "http://192.168.50.32:10003";
        case ENV_TEST_GZ :
        case ENV_TEST_GZ_IP :
        case ENV_CUSTOM :
            return "http://192.168.50.32:10003";
    }
    return "";
}

const AppConfig = {
    initProps,
    isDebug,
    updateCurrentUserInfo,
    getCurrentUserInfo,
    isLogin,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    getApiDomain,
};

module.exports = AppConfig;