import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Feature, Map, MapBrowserEvent, Overlay, View } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { MapUtilService } from '../map-util.service';

@Component({
  selector: 'app-map-two',
  templateUrl: './map-two.component.html',
  styleUrls: ['./map-two.component.css']
})
export class MapTwoComponent implements OnInit, AfterViewInit {

  popupContent: any;
  container;
  content;

  map: Map;

  constructor(private mapUtilService: MapUtilService) { }

  ngOnInit(): void {
    console.log("Init map two (2)")
  }

  ngAfterViewInit() {
    this._initMap();
  }

  _initMap() {
    this.container = document.getElementById('popup');
    this.content = document.getElementById('popup-content');

    const overlay = new Overlay({
      element: this.container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });

    this.mapUtilService.readGeoJsonFeatures().then(
      (features) => {

        const layers = [
          new VectorLayer({
            source: new VectorSource({
              format: new GeoJSON(),
              features: features
            })
          })
        ];

        var selected = null;

        this.map = new Map({
          overlays: overlay ? [overlay] : [],
          layers: layers,
          target: 'map2',
          view: new View({
            projection: 'EPSG:3857',
            center: fromLonLat([0, 0]),
            zoom: 5,
            minZoom: 3,
            maxZoom: 10,
          }),
        });

        this.map.on('pointermove', (e: MapBrowserEvent) => {
          if (selected !== null) {

            const pixel = this.map.getEventPixel(e.originalEvent);
            const hit = this.map.hasFeatureAtPixel(pixel);
            document.getElementById('map2').style.cursor = hit ? 'pointer' : '';
            selected = null;
          } else {
            overlay.setPosition(undefined);
          }

          this.map.forEachFeatureAtPixel(e.pixel, (f: Feature) => {
            selected = f;
            overlay.setPosition(e.coordinate)
            this.popupContent = f.get('name');

            return true;
          });
        });

      }
    );
  }
}
