import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import {Hydrant} from '../classes/hydrant';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.sass']
})
export class GmapsComponent implements OnInit {

  infoContent : string = ''

  iconBase: string =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  lib = this.iconBase + "library_maps.png"

  icons: Record<string, { icon: string }> = {
    parking: {
      icon: this.iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: this.iconBase + "library_maps.png",
    },
    info: {
      icon: this.iconBase + "info-i_maps.png",
    },
  };


  zoom = 12
  center: google.maps.LatLngLiteral = { lat: 40, lng: -20 };
  selectedMarker!: Hydrant;
  markers: Hydrant[] = [];
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  addMarker(event: google.maps.MapMouseEvent) {
    var latLng = event.latLng;
    if (latLng) {
      this.markers.push({
        latLng : latLng,
        options: {
          draggable: true
        },
        info: 'Marker info ' + (this.markers.length + 1),
        type: "parking"
      });
    }
  }

  openInfo(marker: any, content: Hydrant, infoWindo :MapInfoWindow) {
    console.log(content)
    selectedMarker: content
    infoWindo.open(marker)
  }
}
