import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';



@NgModule({
  declarations: [
    CarouselComponent,
    SectionAComponent,
    SectionBComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarouselComponent,
    SectionAComponent,
    SectionBComponent,
  ]
})
export class ComponentsModule { }
