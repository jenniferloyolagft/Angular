import { Breed } from './../breed';
import { Component, OnInit } from '@angular/core';
import { MOCK_BREEDS } from './../mock-breeds';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  breeds = MOCK_BREEDS;
  selectedBreed: Breed;

  constructor() { }

  ngOnInit() { }


  onSelect(breed: Breed): void {
    console.log(breed);
    this.selectedBreed = breed;
  }
}
