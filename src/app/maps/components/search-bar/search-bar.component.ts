import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService ) { }

  // Cada vez que ocurre un evento (tecla en caja, por ejemplo), se limpia el timer y vuelve a empezar
  // Lanza la query al pasar X ms sin evento
  onQueryChange( query: string = '') {
    if ( this.debounceTimer ) clearTimeout( this.debounceTimer );
    this.debounceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery( query );
    }, 1000);
  }

}
