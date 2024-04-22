import {Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

const getIphoneXBottomHeight=()=> {
  if (isIphoneX()) {
    return 34;
  }
  return 0;
}

const getIphoneXTopHeight=()=> {
  if (Platform.OS === 'android') {
    return 0;
  } else {
    if (isIphoneX()) {
      return 44;
    } else {
      return 20;
    }
  }
}



const AppUtil = {
  getIphoneXBottomHeight,
  getIphoneXTopHeight,
};

module.exports = AppUtil;