import React, {Component} from 'react'
import {Image, View, Platform,} from 'react-native'
import {ic_loading} from "../res/ZegoImage";
import RNAndroidLoadingView from "../widget/android/RNAndroidLoadingView";


//页面加载中
class Loading extends Component {


    render() {

        return (
            <View style={[this.props.style, {flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
                {Platform.OS === 'android' ? <RNAndroidLoadingView style={[{width: 100, height: 50},this.props.imageStyle]}/> :
                    <Image source={ic_loading} style={[{width: 100, height: 50}, this.props.imageStyle]}/>}
            </View>
        )
    }
}

module.exports = Loading;
