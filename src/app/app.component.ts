import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private platform: any;
    private defaultLayers: any;
    private pixelRatio: any;
    private behavior: any;
    

    @ViewChild("map")
    public mapElement: ElementRef;

    constructor() {
        this.platform = new H.service.Platform({
            "app_id": "uS4lUFB3BWzvyTMEhet3",
            "app_code": "LDliDFPeNYleDKB9nr0QBw",
            useHTTPS: true
        });
        this.pixelRatio = window.devicePixelRatio || 1;
        
    }

    setUpClickListener(map) {
      map.addEventListener('tap', function (evt) {
        var coord = map.screenToGeo(evt.currentPointer.viewportX,
                evt.currentPointer.viewportY);
        alert('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
            ((coord.lat > 0) ? 'N' : 'S') +
            ' ' + Math.abs(coord.lng.toFixed(4)) +
             ((coord.lng > 0) ? 'E' : 'W'));
      });
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers({
          tileSize: this.pixelRatio === 1 ? 256 : 512,
          ppi: this.pixelRatio === 1 ? undefined : 320
        });
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 12,
                center: { lat: 18.9961, lng: 72.8393 },
                pixelRatio: this.pixelRatio
            }
        );
        this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        this.setUpClickListener(map);
    }

}