import { Component } from '@angular/core'
import { Tag, Task } from '../../shared/models'
import { Severity } from '../../shared/models/tag'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  tags: Tag[] = [
    { id: 1, title: 'Продуктивность', severity: Severity.DEFAULT },
    { id: 2, title: 'Образование', severity: Severity.SUCCESS },
    { id: 3, title: 'Здоровье', severity: Severity.WARNING },
    { id: 4, title: 'Срочно', severity: Severity.FAILURE },
  ]
  tasks: Task[] = [
    {
      title: 'Прочитать книгу Роберта Киосаки “Богатый папа. Бедный папа”.',
      description: 'sad',
      important: false,
      tags: [this.tags[0], this.tags[2]],
      date: new Date(),
    },
  ]
  constructor() {}
}
