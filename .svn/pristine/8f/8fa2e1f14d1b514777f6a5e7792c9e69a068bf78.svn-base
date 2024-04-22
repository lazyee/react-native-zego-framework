package com.zego.rn.widget.loading;

import android.content.Context;
import android.graphics.drawable.AnimationDrawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.ImageView;
import android.widget.LinearLayout;

import androidx.annotation.Nullable;

import com.zego.rn.R;


public class LoadingView extends LinearLayout {
    public LoadingView(Context context) {
        super(context);
        initView(context);
    }

    public LoadingView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        initView(context);
    }

    public LoadingView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        initView(context);
    }

    private void initView(Context context){
        LayoutInflater.from(context).inflate(R.layout.widget_smart_refresh_layout_loading_view,this,true);
        ((AnimationDrawable)((ImageView)findViewById(R.id.ivLoading)).getDrawable()).start();
    }

}
