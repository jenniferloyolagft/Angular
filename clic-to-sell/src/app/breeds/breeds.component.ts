import { Breed } from './../breed';
import { Component, OnInit } from '@angular/core';
import { BreedService } from './../services/breed.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  breeds = Breed[''];
  selectedBreed: Breed;

  constructor(
    private breedService: BreedService
  ) { }

  ngOnInit() {
    this.getBreeds();
   }

  getBreeds(): void {
    this.breedService.getBreeds().subscribe((breeds: any) => {
      this.breeds = breeds;
    });
  }
}
