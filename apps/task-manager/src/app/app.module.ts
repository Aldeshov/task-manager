import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TasksListComponent } from './components/tasks-list/tasks-list.component'
import { TaskItemComponent } from './components/task-item/task-item.component'

@NgModule({
  declarations: [AppComponent, TasksListComponent, TaskItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
