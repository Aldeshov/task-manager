import Tag from './tag'

interface Task {
  title: string
  description: string
  important: boolean
  date: Date
  tags: Tag[]
}

export default Task
