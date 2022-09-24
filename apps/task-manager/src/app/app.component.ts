import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-tasks-list></app-tasks-list>
  `,
})
export class AppComponent {}
