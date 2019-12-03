import android.os.Bundle
import android.os.Handler
import android.support.v7.app.AppCompatActivity

class SplashActivity: AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
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