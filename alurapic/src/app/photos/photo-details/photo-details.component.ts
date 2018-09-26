import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from '../../core/user/user.service';
import { PhotoService } from '../photo/photo.service';
import { PhotoComment } from '../photo/photo-comment';
import { Photo } from '../photo/photo';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  removePhoto() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(
        () => {
          this.alertService.success('Photo removed!', true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
        err => {
          console.log(err);
          this.alertService.warning('Could not delete the photo!', true);
        });
  }
}
