import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
import PropTypes from 'prop-types'
import {ic_empty} from "../res/ZegoImage";
import LanguageUtil from "../utils/LanguageUtil";

//页面空视图
class EmptyView extends Component{

    static defaultProps = {
        icon: null, //图标
        text: null, //文字
    };

    static propsTypes = {
        icon: PropTypes.object,
        text: PropTypes.string,
    };

    render(){
        let icon = this.props.icon;
        let text = this.props.text;
        if(!icon){
            icon = ic_empty;
        }
        if(!text){
            text = LanguageUtil.getString().nothing;
        }

        return(
            <View style={[{flex:1, justifyContent: 'center', alignItems: 'center'}, this.props.style]}>
                <Image source={icon} style={{width: 50, height: 50}}/>
                <Text allowFontScaling={false} style={{fontSize: 14, textAlign: 'center', color: 'white', marginTop: 25, marginLeft: 15, marginRight: 15}}>{text}</Text>
            </View>
        )
    }
}

module.exports = EmptyView;
