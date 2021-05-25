import { Injectable } from '@angular/core';

import GeoJSON from 'ol/format/GeoJSON';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapUtilService {

  features;

  constructor(private http: HttpClient,) { }

  async readGeoJsonFeatures() {
    if (!this.features) {
      const geoJSON = await this.loadWorldFeatures().toPromise();
      const format = new GeoJSON({
        featureProjection: "EPSG:3857"
      });
      this.features = format.readFeatures(geoJSON);
    }

    return [...this.features];
  }

  loadWorldFeatures() {
    return this.http.get('assets/world.json')
  }
}
