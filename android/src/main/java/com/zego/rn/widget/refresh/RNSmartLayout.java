package com.zego.rn.widget.refresh;

import android.view.View;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.scwang.smartrefresh.layout.SmartRefreshLayout;

import java.util.Map;

public class RNSmartLayout extends ViewGroupManager<SmartRefreshLayout> {

    private static final String EVENT_ON_REFRESH = "onRefresh";
    private static final String COMPONENT_NAME = "RNSmartRefreshLayout";
    private static final String TAG = COMPONENT_NAME;
    private Long key = 0L;

    @Override
    public String getName() {
        return COMPONENT_NAME;
    }

    @Override
    protected SmartRefreshLayout createViewInstance(ThemedReactContext reactContext) {
        key = System.currentTimeMillis();
        SmartRefreshLayout smartRefreshLayout = new SmartRefreshLayout(reactContext);
        smartRefreshLayout.setTag(COMPONENT_NAME);
        smartRefreshLayout.setRefreshHeader(new CommonRefreshHeader(reactContext));
        smartRefreshLayout.setEnableRefresh(true);
        smartRefreshLayout.setEnableLoadMore(false);//是否启用上拉加载功能
        smartRefreshLayout.setReboundDuration(300);//回弹动画时长（毫秒）
        smartRefreshLayout.setHeaderTriggerRate(1.2f);

        smartRefreshLayout.setOnRefreshListener(refreshLayout -> refresh(reactContext,smartRefreshLayout));
        return smartRefreshLayout;
    }

    @Override
    public void onDropViewInstance(SmartRefreshLayout view) {
        super.onDropViewInstance(view);
    }

    @Override
    public void addView(SmartRefreshLayout parent, View child, int index) {
        super.addView(parent, child, index);
        parent.postInvalidate();
    }

    @ReactProp(name = "refreshing")
    public void refreshing(final SmartRefreshLayout refreshLayout, final boolean isRefreshing){
        if(!isRefreshing){
            refreshLayout.finishRefresh();
        }
    }

    //发送给RN刷新事件 加载数据
    private void refresh(ThemedReactContext reactContext, SmartRefreshLayout refreshLayout){
        if(reactContext!=null){
            this.dispatchEvent(reactContext,refreshLayout,EVENT_ON_REFRESH,null);
        }else{
            refreshLayout.finishRefresh();
        }
    }

    private void dispatchEvent(final ReactContext reactContext,
                              final SmartRefreshLayout refreshlayout,
                              final String eventName,
                              @Nullable final WritableMap params) {
        if (reactContext==null) {
            refreshlayout.finishRefresh();
        }else{
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                    refreshlayout.getId(),//实例的ID native和js两个视图会依据getId()而关联在一起
                    eventName,//事件名称
                    params
            );
            //原生模块发送事件
            reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(this.key + eventName, params);
        }
    }

    @Nullable
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put(EVENT_ON_REFRESH, MapBuilder.of("registrationName", EVENT_ON_REFRESH))
                .build();
    }

    /**
     * 设置是否启用越界回弹
     */
    @ReactProp(name = "enableOverScrollBounce")
    public void enableOverScrollBounce(final SmartRefreshLayout refreshLayout, final boolean enableOverScrollBounce) {
        refreshLayout.setEnableOverScrollBounce(enableOverScrollBounce);
    }

    /**
     * 设置是否启用越界拖动（仿苹果效果）
     */
    @ReactProp(name = "enableOverScrollDrag")
    public void enableOverScrollDrag(final SmartRefreshLayout refreshLayout, final boolean enableOverScrollDrag) {
        refreshLayout.setEnableOverScrollDrag(enableOverScrollDrag);
    }

    /**
     * 显示拖动高度/真实拖动高度（默认0.5，阻尼效果）
     */
    @ReactProp(name = "dragRate")
    public void dragRate(final SmartRefreshLayout refreshLayout, final float dragRate) {
        refreshLayout.setDragRate(dragRate);
    }

    /**
     * 设置下拉最大高度和Header高度的比率（将会影响可以下拉的最大高度）
     */
    @ReactProp(name = "headerMaxDragRate")
    public void headerMaxDragRate(final SmartRefreshLayout refreshLayout, final float headerMaxDragRate) {
        refreshLayout.setHeaderMaxDragRate(headerMaxDragRate);
    }

    /**
     * 设置 触发刷新距离 与 HeaderHieght 的比率
     */
    @ReactProp(name = "headerTriggerRate")
    public void headerTriggerRate(final SmartRefreshLayout refreshLayout, final float headerTriggerRate) {
        refreshLayout.setHeaderTriggerRate(headerTriggerRate);
    }

    /**
     * 设置回弹动画时长
     */
    @ReactProp(name = "reboundDuration")
    public void reboundDuration(final SmartRefreshLayout refreshLayout, final int reboundDuration) {
        refreshLayout.setReboundDuration(reboundDuration);
    }

    /**
     * 是否启用下拉刷新（默认启用）
     */
    @ReactProp(name = "enableRefresh")
    public void enableRefresh(final SmartRefreshLayout refreshLayout, final boolean enableRefresh) {
        refreshLayout.setEnableRefresh(enableRefresh);
    }

    /**
     * 设置是否开启在刷新时候禁止操作内容视图
     */
    @ReactProp(name = "disableContentWhenRefresh")
    public void disableContentWhenRefresh(final SmartRefreshLayout refreshLayout, final boolean disableContentWhenRefresh) {
        refreshLayout.setDisableContentWhenRefresh(disableContentWhenRefresh);
    }

    /**
     * 设置是否开启纯滚动模式
     */
    @ReactProp(name = "enablePureScrollMode")
    public void enablePureScrollMode(final SmartRefreshLayout refreshLayout, final boolean enablePureScrollMode) {
        refreshLayout.setEnablePureScrollMode(enablePureScrollMode);
    }

    /**
     * 设置是会否启用嵌套滚动功能（默认关闭+智能开启）
     */
    @ReactProp(name = "enableNestedScroll")
    public void enableNestedScroll(final SmartRefreshLayout refreshLayout, final boolean enableNestedScroll) {
        refreshLayout.setEnableNestedScroll(enableNestedScroll);
    }
}
