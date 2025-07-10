import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FilterControlsComponent } from "./filter-controls/filter-controls.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApp';
}
