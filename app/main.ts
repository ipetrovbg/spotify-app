import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http }    from '@angular/http';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);