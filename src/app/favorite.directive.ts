import { Directive } from '@angular/core';

@Directive({
  selector: '[appFavorite]',
  standalone: true
})
export class FavoriteDirective {

  constructor() { }

}
