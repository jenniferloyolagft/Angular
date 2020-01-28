import { Component, OnInit, Input } from '@angular/core';
import { Breed } from './../breed';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.scss']
})

export class BreedDetailComponent implements OnInit {
  @Input() breed: Breed;

  constructor() { }

  ngOnInit() {
  }

}
