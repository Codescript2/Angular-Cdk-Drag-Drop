import { Component } from '@angular/core';
import { BasicComponent } from './components/basic/basic.component';
import { ListComponent } from './components/list/list.component';
import { ConnectedComponent } from './components/connected/connected.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [BasicComponent, ListComponent, ConnectedComponent]
})
export class AppComponent {
}
