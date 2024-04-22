import React from 'react';
import Loading from './Loading';
import {View} from 'react-native';
import FailPage from './FailPage';
import EmptyView from './EmptyView';
import LanguageUtil from "../utils/LanguageUtil";
import NativeMethodUtil from "../utils/NativeMethodUtil";

import {STATUS_PAGE_EMPTY, STATUS_PAGE_FAIL, STATUS_PAGE_LOADING, STATUS_PAGE_NORMAL} from "../config/Status";



//基础页面组件
class BasePageComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pageStatus: STATUS_PAGE_NORMAL //页面状态
        }
    }

    //设置页面状态
    setPageStatus(status,callback){
        if(status !== this.state.pageStatus) {
            this.setState({
                pageStatus: status
            },callback)
        }
    }

    setPageNormalStatus(callback){
        this.setPageStatus(STATUS_PAGE_NORMAL,callback);
    }

    setPageLoadingStatus(callback){
        this.setPageStatus(STATUS_PAGE_LOADING,callback);
    }

    setPageFailStatus(callback){
        this.setPageStatus(STATUS_PAGE_FAIL,callback);
    }

    setPageEmptyStatus(callback){
        this.setPageStatus(STATUS_PAGE_EMPTY,callback);
    }

    render() {
        let content = null;
        switch (this.state.pageStatus) {
            case STATUS_PAGE_NORMAL : {
                content = this.getContent();
            }
            break;
            case STATUS_PAGE_LOADING : {
                content = <Loading style={{flex: 1}}/>;
            }
            break;
            case STATUS_PAGE_FAIL : {
                content = <FailPage style={{flex: 1}} onReload={() => {
                    this.onReload();
                }}/>;
            }
            break;
            case STATUS_PAGE_EMPTY : {
                content = <EmptyView icon={this.getEmptyIcon()} text={this.getEmptyText()} style={{flex: 1}}/>
            }
        }

        return <View style={[{flex: 1}, this.getContainerStyle()]}>
            {this.getHeader()}
            {content}
            {this.getFooter()}
        </View>
    }

    //返回
    goBack(){
        this.props.navigation.goBack();
    }

    //关闭rn
    close(){
        NativeMethodUtil.goBackToNative();
    }

    //重新加载
    onReload(){
        this.setPageStatus(STATUS_PAGE_LOADING);
    }

    //获取容器样式
    getContainerStyle(){
        return {};
    }

    //获取头部
    getHeader(){
        return null;
    }

    //获取底部
    getFooter(){
        return null;
    }

    //获取内容视图
    getContent(){
        return null;
    }

    //获取空视图图标
    getEmptyIcon(){
        return null;
    }

    //获取空视图文字
    getEmptyText(){
        return LanguageUtil.getString().noMoreDatas;
    }
}

module.exports = BasePageComponent;
