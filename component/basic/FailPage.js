import React, {Component} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {ic_load_fail} from '../res/ZegoImage'
import LanguageUtil from "../utils/LanguageUtil";
import PropTypes from 'prop-types'

//失败页面 onReload 重新加载
class FailPage extends Component{

    static defaultProps = {
        onReload: null, //重新加载回调
    };

    static propsTypes = {
        onReload: PropTypes.func,
    };

    render(){
        return (
            <View style={[this.props.style, {flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
                <Image source={ic_load_fail} style={{width: 50, height: 50}}/>
                <Text allowFontScaling={false} style={{color: 'white', fontSize: 14, marginTop: 25}}>{LanguageUtil.getString().loadFailTip}</Text>

                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.onReload()} style={{width: 100, height: 30, borderRadius: 15, borderWidth: 1, borderColor: 'white',
                marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Text allowFontScaling={false} style={{color: 'white', fontSize: 14}}>{LanguageUtil.getString().refresh}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

module.exports = FailPage;