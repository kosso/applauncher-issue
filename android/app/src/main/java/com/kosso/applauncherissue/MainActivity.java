package com.kosso.applauncherissue;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import java.util.concurrent.Executors;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(UtilsPlugin.class);
        super.onCreate(savedInstanceState);
    }


}
