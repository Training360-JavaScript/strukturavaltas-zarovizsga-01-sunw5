import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from './model/drug';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drugstore';
  drugs$: Observable<Drug[]> = this.drugService.getAll();

  log() {
    this.drugs$.subscribe((data) => {console.log(data); });
  }



  constructor(private drugService: DrugService) {
    this.log();
  }
}
