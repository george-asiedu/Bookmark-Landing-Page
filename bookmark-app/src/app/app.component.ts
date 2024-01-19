import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ExtensionsComponent } from './extensions/extensions.component';
import { FAQComponent } from './faq/faq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavigationComponent, 
    HomeComponent, 
    FeaturesComponent, 
    ExtensionsComponent,
    FAQComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookmark-app';
}
