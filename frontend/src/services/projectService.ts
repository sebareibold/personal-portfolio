import type { Project, ApiResponse } from "../types/Project"
import { API_CONFIG } from "../config/api"

export class ProjectService {
  static async getAllProjects(): Promise<Project[]> {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/projects`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse<Project[]> = await response.json()

      if (result.success) {
        return result.data
      } else {
        throw new Error(result.message || "Error fetching projects")
      }
    } catch (error) {
      console.error("Error fetching projects:", error)
      return this.getMockProjects()
    }
  }

  static async getProjectById(id: string): Promise<Project | null> {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/projects/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse<Project> = await response.json()

      if (result.success) {
        return result.data
      } else {
        throw new Error(result.message || "Error fetching project")
      }
    } catch (error) {
      console.error("Error fetching project:", error)
      return null
    }
  }

  static async getProjectsByCategory(categoria: string): Promise<Project[]> {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}/projects?categoria=${encodeURIComponent(categoria)}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: ApiResponse<Project[]> = await response.json()

      if (result.success) {
        return result.data
      } else {
        throw new Error(result.message || "Error fetching projects by category")
      }
    } catch (error) {
      console.error("Error fetching projects by category:", error)
      return []
    }
  }

  // Datos mock para desarrollo y testing
  private static getMockProjects(): Project[] {
    return [
      {
        id: "p1",
        descripcion: "App de gestión de tareas con autenticación y sincronización en tiempo real",
        imagen: "/task-management-app.png",
        link_github: "https://github.com/usuario/task-manager",
        link_produccion: "https://task-manager-demo.vercel.app",
        tecnologias: ["React", "Node.js", "MongoDB", "Socket.io"],
        categoria: "Web App",
        fecha: "2025-01-15",
      },
      {
        id: "p2",
        descripcion: "API REST para e-commerce con sistema de pagos integrado",
        imagen: "/ecommerce-api-dashboard.png",
        link_github: "https://github.com/usuario/ecommerce-api",
        link_produccion: "https://api-ecommerce-demo.herokuapp.com",
        tecnologias: ["Node.js", "Express", "PostgreSQL", "Stripe"],
        categoria: "API",
        fecha: "2024-12-20",
      },
      {
        id: "p3",
        descripcion: "Análisis de datos de ventas con visualizaciones interactivas",
        imagen: "/data-dashboard-charts.png",
        link_github: "https://github.com/usuario/sales-analytics",
        link_produccion: "https://sales-analytics-demo.streamlit.app",
        tecnologias: ["Python", "Pandas", "Plotly", "Streamlit"],
        categoria: "Data Science",
        fecha: "2024-11-10",
      },
    ]
  }
}
