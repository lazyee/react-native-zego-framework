import React, {Component} from 'react';
import {
    requireNativeComponent,
} from 'react-native';

const RNLoadingView = requireNativeComponent('RNLoadingView');


class RNAndroidLoadingView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {style} = this.props;
        return <RNLoadingView style={[{width: 80, height: 80},style]}/>
    }
}

module.exports = RNAndroidLoadingView;