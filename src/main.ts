import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aWVyZGVsY2FtcG8iLCJhIjoiY2wxbjhhbzdsMDFvbzNkazE2aTd0Z3VpaiJ9.mBhIl4C0T-ZiD4ZMtT0NtA';

if ( !navigator.geolocation ){
  throw new Error('El navegador no soporta la geolocalización')
} 

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
