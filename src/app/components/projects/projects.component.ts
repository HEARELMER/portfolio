import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../templts/slider/slider.component';

@Component({
  selector: 'app-projects',
  standalone: true,

  imports: [CommonModule,SliderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
