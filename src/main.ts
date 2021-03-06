import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from "@angular/core";

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
    enableProdMode();
}
var troll = new Image();
Object.defineProperty(troll, 'id', {
    get: function () {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
});
setInterval(() => console.log('%cHello', troll), 200);
// Anti-bot measures
let oldSetInterval = window.setInterval;
window.setInterval = (handler: any, timeout?: any, ...args: any[]) => {
    if (timeout != null && timeout <= 200) {
        timeout = 200;
    }
    return oldSetInterval(handler, timeout, args);
};
platformBrowserDynamic().bootstrapModule(AppModule);