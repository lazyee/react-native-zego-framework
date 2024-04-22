import {NativeModules, Platform} from 'react-native';
import {AppConfig} from '../config/AppConfig'

const NATIVE_MODULE = 'ReactNativeInteraction';

/**
 * 回调原生方法
 * @param moduleName 模块名
 * @param funcName 方法名
 * @param params 参数
 */
const callNativeMethod=(moduleName, funcName, params)=> {
  if (NativeModules[moduleName]) {
    if (NativeModules[moduleName][funcName]) {
      if (params) {
        NativeModules[moduleName][funcName](params);
      } else {
        NativeModules[moduleName][funcName]();
      }
    } else {
      console.log(`找不到[${moduleName}]模块中的[${funcName}]方法`);
    }
  } else {
    console.log(`找不到[${moduleName}]模块中的[${funcName}]方法`);
  }
}

/**
 * 隐藏原生启动蒙版
 */
const hideNativeLauncherMask=()=> {
  callNativeMethod(NATIVE_MODULE, 'hideNativeLauncherMask');
}



/**
 * 登录
 */
const loginNative=(loginCompletion, cancelCallback)=> {
  callNativeMethod(NATIVE_MODULE, 'login', userInfo => {
    if (userInfo) {
      AppConfig.updateCurrentUserInfo(userInfo);
      if (typeof loginCompletion === 'function') {
        loginCompletion(userInfo);
      }
    } else {
      if (typeof cancelCallback === 'function') {
        cancelCallback();
      }
    }
  });
}

/**
 * 返回原生界面
 */
const goBackToNative=()=> {
  callNativeMethod(NATIVE_MODULE, 'goBack');
}

/**
 * 设置原生状态栏样式
 * @param colorName ['white','black]
 */
const setNativeStatusBarStyle=(colorName = 'white')=> {
  callNativeMethod(NATIVE_MODULE, 'setStatusBarStyle', colorName);
}

/**
 * 显示错误toast提示
 * @param text
 */
const showNativeErrorToastIOS=(text)=> {
  callNativeMethod(NATIVE_MODULE, 'showErrorToast', text);
}

/**
 * 显示成功toast提示
 * @param text
 */
const showNativeSuccessToastIOS=(text)=> {
  callNativeMethod(NATIVE_MODULE, 'showSuccessToast', text);
}

/**
 * 显示loading弹窗
 * @param text
 * @param delay
 */
const showNativeLoadingToast=(text, delay)=> {
  if (Platform.OS === 'ios') {
    callNativeMethod(NATIVE_MODULE, 'showLoadingToast', {text, delay});
  } else {
    callNativeMethod(NATIVE_MODULE, 'showLoadingToast');
  }
}

/**
 * 隐藏loading弹窗
 */
const hideNativeLoadingToast=()=> {
  callNativeMethod(NATIVE_MODULE, 'hideLoadingToast');
}

/**
 * 打开原生界面commonId
 * @param className
 * @param data
 */
const openNativePage=(className, data)=> {
  callNativeMethod(NATIVE_MODULE, 'openAppWindow', {className, data});
}

/**
 * 打开原生商品详情界面
 * @param commonId
 */
const openGoodsDetailNativePage=(commonId)=> {
  openNativePage(
    Platform.OS === 'ios'
      ? 'CAGoodsDetailViewController'
      : 'com.zegobird.shop.ui.goods.detail.GoodsDetailActivity',
    {commonId: commonId.toString()},
  );
}

//购物车结算
const shopCartNativeCheckout=(json)=> {
  if (Platform.OS === 'ios') {
    openNativePage('CAOrderConfirmViewController', {
      fromShopcart: true,
      existDiscountSet: false,
      json: json,
    });
  } else {
    openNativePage('com.zegobird.shop.ui.order.confirm.ConfirmOrderActivity', {
      KEY_ORDER_INFO: json,
      KEY_IS_CART: '1',
      KEY_IS_EXIST_BUNDLING: '0',
    });
  }
}

//设置页面是可以滑动返回，ios专用
const setNativeInteractivePopEnableIOS=(enable = true)=> {
  callNativeMethod(
    NATIVE_MODULE,
    'setInteractivePopEnable',
    enable ? 'true' : 'false',
  );
}

/**
 * 点击跳转到原生模块
 * @param data
 */
const clickGotoNativeModule=(data)=> {
  callNativeMethod(
    NATIVE_MODULE,
    'clickGotoNativeModule',
    JSON.stringify(data),
  );
}

/**
 * 支付
 */
const nativeZegoPay=(data, callback)=> {
  const moduleName = NativeModules[NATIVE_MODULE];
  if (moduleName) {
    const funcName = moduleName["zegoPay"];
    if (funcName) {
      funcName(data, callback);
    }
  }
}

const NativeMethodUtil = {
  NATIVE_MODULE,

  callNativeMethod,
  nativeZegoPay,
  clickGotoNativeModule,
  openGoodsDetailNativePage,
  shopCartNativeCheckout,
  openNativePage,
  showNativeLoadingToast,
  hideNativeLoadingToast,
  loginNative,
  setNativeStatusBarStyle,
  hideNativeLauncherMask,
  goBackToNative,

  setNativeInteractivePopEnableIOS,
  showNativeSuccessToastIOS,
  showNativeErrorToastIOS,
};

module.exports = NativeMethodUtil;