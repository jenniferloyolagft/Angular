import { Component, OnInit, Input } from '@angular/core';
import { Breed } from './../breed';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BreedService } from './../services/breed.service';
@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.scss']
})

export class BreedDetailComponent implements OnInit {
  breed: Breed;

  constructor(
    private route: ActivatedRoute,
    private breedService: BreedService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getBreed();
  }

  getBreed() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.breedService.getBreed(id).subscribe((breed) => {
      this.breed = breed;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
