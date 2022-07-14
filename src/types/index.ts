export type Todo = {
    id: string
    body: string
    title: string
    dedline?: string
    done: boolean
    important: boolean
    category: string[]
}