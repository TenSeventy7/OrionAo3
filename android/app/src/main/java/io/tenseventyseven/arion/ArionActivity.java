package io.tenseventyseven.arion;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

// plugins
import com.nikosdouvlis.navigationbar.NavigationBar;

import java.util.ArrayList;

public class ArionActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
	  add(NavigationBar.class);
    }});
  }
}
