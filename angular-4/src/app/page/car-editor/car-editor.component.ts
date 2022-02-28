import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  product$: Observable<Car> = this.aRoute.params.pipe(
    switchMap(params => this.carService.get(params['id']))
  )
  constructor(
    private carService: CarService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
