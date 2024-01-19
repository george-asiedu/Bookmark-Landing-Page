import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-extensions',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './extensions.component.html',
  styleUrl: './extensions.component.css'
})
export class ExtensionsComponent {

}
