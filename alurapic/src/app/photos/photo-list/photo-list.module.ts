import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CardModule } from '../../shared/components/card/card.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    FilterByDescription,
    LoadButtonComponent,
    PhotoListComponent,
    PhotosComponent,
    SearchComponent
  ],
  imports: [
    DarkenOnHoverModule,
    CommonModule,
    PhotoModule,
    CardModule
  ]
})
export class PhotoListModule { }
