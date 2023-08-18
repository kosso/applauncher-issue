import { W as WebPlugin } from "./index.ca2dd906.js";
class AppLauncherWeb extends WebPlugin {
  async canOpenUrl(_options) {
    return { value: true };
  }
  async openUrl(options) {
    window.open(options.url, "_blank");
    return { completed: true };
  }
}
export { AppLauncherWeb };
