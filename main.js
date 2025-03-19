import { LAppDelegate } from './assets/lappdelegate.js';
import * as LAppDefine from './assets/lappdefine.js';

/**
 * ブラウザロード後の処理
 */
window.addEventListener(
  'load',
   () => {
    // Initialize WebGL and create the application instance
    if (!LAppDelegate.getInstance().initialize()) {
      return;
    }

    LAppDelegate.getInstance().run();
  },
  { passive: true }
);

/**
 * 終了時の処理
 */
window.addEventListener(
  'beforeunload',
  () => LAppDelegate.releaseInstance(),
  { passive: true }
);