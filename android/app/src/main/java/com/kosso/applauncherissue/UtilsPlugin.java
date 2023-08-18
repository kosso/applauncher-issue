package com.kosso.applauncherissue;

import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.util.InternalUtils;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.content.Context;


@CapacitorPlugin(
        name = "Utils"
)
public class UtilsPlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }

    // Using methods found in capacitor/app-launcher plugin
    @PluginMethod
    public void canOpenURL(PluginCall call) {
        String url = call.getString("url");
        if (url == null) {
            call.reject("Must supply a url");
            return;
        }

        Context ctx = this.getActivity().getApplicationContext();
        final PackageManager pm = ctx.getPackageManager();

        JSObject ret = new JSObject();
        try {
            InternalUtils.getPackageInfo(pm, url, PackageManager.GET_ACTIVITIES);
            ret.put("value", true);
            call.resolve(ret);
            return;
        } catch (PackageManager.NameNotFoundException e) {
            Logger.error(getLogTag(), "Package name '" + url + "' not found!", null);
        }
        ret.put("value", false);
        call.resolve(ret);
    }


    @PluginMethod
    public void canOpenURLTest(PluginCall call) {
        String url = call.getString("url");
        if (url == null) {
            call.reject("Must supply a url");
            return;
        }

        JSObject ret = new JSObject();

        Context ctx = this.getActivity().getApplicationContext();
        final PackageManager pm = ctx.getPackageManager();
        boolean canOpen = false;
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            if (intent.resolveActivity(pm) != null) {
                canOpen = true;
            }
        } catch (Exception ex) {
        }

        ret.put("value", canOpen);
        call.resolve(ret);
    }

}
