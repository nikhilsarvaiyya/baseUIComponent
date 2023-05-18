import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ALL_ICONS } from 'src/assets/script/icons';

@Injectable({
  providedIn: 'root'
})
export class FormCardService {

  constructor() { }

  getIcons() {
		return of(ALL_ICONS);
	}
}
