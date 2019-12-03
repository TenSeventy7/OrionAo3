package io.tenseventyseven.arion

import com.microsoft.appcenter.AppCenter;
import com.microsoft.appcenter.analytics.Analytics;
import com.microsoft.appcenter.crashes.Crashes;
import com.microsoft.appcenter.AppCenter;
import com.microsoft.appcenter.analytics.Analytics;
import com.microsoft.appcenter.crashes.Crashes;

import android.os.Bundle
import android.os.Handler
import android.support.v7.app.AppCompatActivity

import android.content.Intent

class SplashActivity: AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        AppCenter.start(getApplication(), "b458fa3e-c387-4728-9a2c-dcc97c3bddc8",
                  Analytics.class, Crashes.class);
        scheduleSplashScreen()
    }

    private fun scheduleSplashScreen() {
        val splashScreenDuration = getSplashScreenDuration()
        Handler().postDelayed(
                {
                    
                    val intent = Intent(this, ArionActivity::class.java)
                    startActivity(intent)
                    finish()
                },
                splashScreenDuration
        )
    }

    private fun getSplashScreenDuration() = 3000L

}