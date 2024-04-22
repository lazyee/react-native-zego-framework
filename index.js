module.exports ={
    get AppUtil(){
        return require("./component/utils/AppUtil");
    },
    get LanguageUtil(){
        return require("./component/utils/LanguageUtil");
    },
    get StringUtil(){
        return require("./component/utils/StringUtil");
    },
    get AppConfig(){
        return require("./component/config/AppConfig");
    },
    get AppColor(){
        return require("./component/res/Colors");
    },
    get HttpUtil(){
        return require("./component/utils/HttpUtil");
    },
    get EventUtil(){
        return require("./component/utils/EventUtil");
    },
    get NativeMethodUtil(){
        return require("./component/utils/NativeMethodUtil");
    },
    get RNAndroidSmartRefreshLayout(){
        return require("./component/widget/android/RNAndroidSmartRefreshLayout");
    },
    get RNAndroidLoadingView(){
        return require("./component/widget/android/RNAndroidLoadingView");
    },
    get BasePageComponent(){
        return require("./component/basic/BasePageComponent");
    },
    get EmptyView(){
        return require("./component/basic/EmptyView");
    },
    get FailPage(){
        return require("./component/basic/FailPage");
    },
    get Loading(){
        return require("./component/basic/Loading");
    },
    get IPhoneXBottom(){
        return require("./component/basic/IPhoneXBottom");
    },
    get IPhoneXTop(){
        return require("./component/basic/IPhoneXTop");
    },
    get ZegobirdButton(){
        return require("./component/basic/ZegobirdButton");
    },

    ic_back_white: require('./resource/back_white.png'),
    ic_empty: require('./resource/goods_empty.png'),
    ic_load_fail: require('./resource/load_fail.png'),
    ic_loading: require('./resource/loading.gif'),
};
