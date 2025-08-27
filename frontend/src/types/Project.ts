export interface Project {
  id: string
  descripcion: string
  imagen: string
  link_github: string
  link_produccion: string
  tecnologias: string[]
  categoria: string
  fecha: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}
