
package com.zego.rn;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;


public class RNZegoFrameworkModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNZegoFrameworkModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNZegoFrameworkModule";
  }
}