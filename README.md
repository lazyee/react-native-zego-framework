
# react-native-zego-framework

## Getting started

`$ npm install react-native-zego-framework --save`

### Mostly automatic installation

`$ react-native link react-native-zego-framework`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-zego-framework` and add `RNZegoFramework.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNZegoFramework.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.zego.rn.RNZegoFrameworkPackage;` to the imports at the top of the file
  - Add `new RNZegoFrameworkPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-zego-framework'
  	project(':react-native-zego-framework').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-zego-framework/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-zego-framework')
  	```


## Usage
## 基础组件
|组件|描述|
|---|---|
|BasePageComponent|基础组件|
|EmptyView|空视图|
|LoadingView|网络请求占位视图，iOS上是gif动画，android上是帧动画|
|FailPage|网络请求失败时候的错误页面,有点击重试的方法回调（onReload）|
|IphoneXBottom|用来兼容iPhoneX底部控件，双平台可用|
|IphoneXTop|用来兼容iPhoneX顶部控件，双平台可用|

## 内部资源
##### 常用颜色值（Colors.js,通过Colors.xxxx的方式进行调用）
|key|value|描述|
|:---|---|---|
|mainColor|<font color="#0FD7C8">#0FD7C8</font>|APP主色调|
|mainTintColor|<font color=#FFFFFF>#FFFFFF</font>|APP主色调着色|
|navigationBarBackgroundColor|<font color=#0FD7C8>#0FD7C8</font>|导航栏背景颜色|
|navigationBarTintColor|<font color=#FFFFFF>#FFFFFF</font>|导航栏着色|
|mainBackgroundColor|<font color=#F2F2F2>#F2F2F2</font>|背景主色调|
|titleTextColor|<font color=#39362B>#39362B</font>|标题性文本颜色(较深)|
|descTextColor|<font color=#A3A3A3>#A3A3A3</font>|描述类颜色|
|contentLightTextColor|<font color=#999999>#999999</font>|内容性文本颜色(较浅)|
|dividerColor|<font color=#E0E0E0>#E0E0E0</font>|分割线颜色|

##### 图片资源（ZegoImage.js,通过ZegoImage.xxxx的方式进行调用）
|key|value|描述|
|:---|:---:|---|
|ic_back_white|<img src="https://i.loli.net/2020/02/12/76KTlkwAoE9fWRq.png" width="23px" height="40px"/>|白色返回按钮|
|goods_empty|<img src="https://i.loli.net/2020/02/12/DCwrhTNRykL6IEO.png" width="30px" height="30px"/>|空视图|
|load_fail|<img src="https://i.loli.net/2020/02/12/PXrNEH39ZODnvcR.png" width="30px" height="30px"/>|请求失败|
|loading|<img src="https://i.loli.net/2020/02/12/x9lB71tNXjHZOqy.gif" width="100px" height="50px"/>|loading动画，gif|

##### 字符串资源（目前有中文，英文，缅文mm3，缅文zawgyi）
|key|中文|英文|缅文mm3|缅文zawgyi|
|:---|---|---|---|---|
|loadFailTip|加载时遇到了问题，刷新一下试试|There was a problem loading, try refreshing|Loading မှားယွင်း၊  Refresh လုပ်ကြည့်ပေးပါ|Loading မွားယြင္း၊  Refresh လုပ္ၾကည့္ေပးပါ|
|refresh|刷新|Refresh|Refresh|Refresh|
|loading|加载中...|Loading...|Loading...|Loading...|
|nothing|什么都没有|Nothing|လောလောဆယ်ဘာမှမရှိသေးပါ|ေလာေလာဆယ္ဘာမွမရွိေသးပါ|

## 工具类
##### 字符串工具类 StringUtil.js
|方法名|参数|描述|
|:---|:---:|---|
|isEmpty|String|判断是否为null 或 空字符串|
|formatString|String,Array|将文字进行占位复制，其中占位符用{数字}来表示，例如参数"00{0}0{1}000",["1111","2222],返回的将是00111102222000|
|formatMoney|Number|格式化钱，增加千分位,保留两位小数,例如8888 -> Ks 8,888|

##### 工具类 AppUtil.js
|方法名|参数|描述|
|:---|:---:|---|
|getIphoneXBottomHeight|-|获取iIphoneX 底部高度|
|getIphoneXTopHeight|-|获取iIphoneX 顶部高度,如果是X返回44,不是返回20|

##### 请求工具类 HttpUtil.js (调用方式: HttpUtil.get(xx,xx,xx))
|方法名|参数|描述|
|:---|:---|---|
|get|method:String(必须)<br/>params:object<br/>showLoading:bool<br/>showError:bool<br/>loadingDelay:Number<br/>loadingText:String<br/>transferToZawgyi:bool|method 服务器的请求方法<br/>params 参数<br/>showLoading 是否显示loading<br/>showError 是否提示报错信息<br/>loadingDelay loading 延迟 毫秒<br/>loadingText loading 文字<br/>transferToZawgyi 是否需要转成zawgyi|
|post|method:String(必须)<br/>params:object<br/>showLoading:bool<br/>showError:bool<br/>loadingDelay:Number<br/>loadingText:String<br/>transferToZawgyi:bool|method 服务器的请求方法<br/>params 参数<br/>showLoading 是否显示loading<br/>showError 是否提示报错信息<br/>loadingDelay loading 延迟 毫秒<br/>loadingText loading 文字<br/>transferToZawgyi 是否需要转成zawgyi|

##### 语言工具类 LanguageUtil.js

|常量|value|描述|
|:---|:---:|:---:|
|LANG_ZAWGYI|my-MM|缅文zawgyi|
|LANG_MM3|my|缅文mm3|
|LANG_ENGLISH|en|英文|
|LANG_CHINESE|zh-Hans|中文|

|方法名|参数|描述|
|:---|:---:|---|
|updateLanguage|lang:String|用语言常量来做参数，如LANG_ENGLISH，用来更新系统当前显示语言|
|getLanguage|-|获取当前使用的语言常量，默认是LANG_ZAWGYI|
|getStringByKey|key:String|根据关键字返回对应当前语言的字符串|
|zawgyiFromMm3|str:String|缅文mm3 转换成 缅文zawgyi|
|mm3FromZawgyi|str:String|缅文zawgyi 转换成 缅文mm3|
|transferToMm3IfNeeded|str:String|如果需要 转换成mm3, 服务器上面存储的都是mm3,上传的内容都要转，如果当前选中的语言是zawgyi|
|transferToZawgyiIfNeeded|str:String|如果需要 转换成zawgyi, 服务器上面存储的都是mm3,上传的内容都要转，如果当前选中的语言是zawgyi|
|getString|-|获取当前语言环境下的，字符串资源对象，如果都不匹配，则返回一个空内容的对象|

##### 原生方法工具类 NativeMethodUtil.js

|常量|value|描述|
|:---|:---:|:---:|
|NATIVE_MODULE|ReactNativeInteraction|调用到的原生模块名|

|方法名|参数|描述|
|:---|:---:|---|
|callNativeMethod|moduleName:String<br/> funcName:String<br/> params:Object(非必须)|moduleName:模块名<br/>funcName:方法名<br/> params:参数|
|hideNativeLauncherMask|-|隐藏原生启动蒙版|
|loginNative|loginCompletion:function<br/> cancelCallback:function<br/>|调用原生的登录<br/> loginCompletion 登录成功回调<br/> cancelCallback 取消登录回调|
|goBackToNative|-|调用原生APP的返回|
|setNativeStatusBarStyle|colorName:String|设置原生状态栏样式 colorName ['white','black]|
|showNativeErrorToastIOS|text:String|显示错误toast提示,iOS专用,Android中无效|
|showNativeSuccessToastIOS|text:String|显示成功toast提示,iOS专用,Android中无效|
|showNativeLoadingToast|{text:String 提示文字, delay:Number 延迟显示的时间}|此参数只在iOS中生效，Android就只是一个loading弹窗|
|hideNativeLoadingToast|-|隐藏loading弹窗|