import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo: Photo;

  constructor(
    private activateRoute: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.photoId;
    this.photoService
      .findById(id)
      .subscribe(photo => this.photo = photo);
  }
}
