export enum Severity {
  DEFAULT,
  SUCCESS,
  WARNING,
  FAILURE,
}

interface Tag {
  id: number
  title: string
  severity: Severity
}

export default Tag
