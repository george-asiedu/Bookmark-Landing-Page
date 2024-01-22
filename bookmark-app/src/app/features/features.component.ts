import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

}
