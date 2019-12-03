package io.tenseventyseven.arion

import android.os.Bundle
import com.getcapacitor.BridgeActivity
import com.getcapacitor.Plugin
import java.util.ArrayList

// plugins
import com.nikosdouvlis.navigationbar.NavigationBar

class ArionActivity:BridgeActivity() {
  fun onCreate(savedInstanceState:Bundle) {
    super.onCreate(savedInstanceState)
    this.init(savedInstanceState, object:ArrayList<Class<out Plugin>>() {
      init{
        add(NavigationBar::class.java!!)
      }
    })
  }
}