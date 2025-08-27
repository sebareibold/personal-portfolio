// Configuración de API que funciona en diferentes entornos
export const getApiBaseUrl = (): string => {
  // Intentar obtener la URL de diferentes fuentes
  if (typeof window !== "undefined") {
    // En el navegador, intentar obtener de variables globales o localStorage
    const envUrl = (window as any).__API_URL__ || localStorage.getItem("API_URL")
    if (envUrl) return envUrl
  }

  // Intentar import.meta.env si está disponible
  try {
    if (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) {
      return import.meta.env.VITE_API_URL
    }
  } catch (e) {
    // Silenciar error si import.meta no está disponible
  }

  // URL por defecto para desarrollo
  return "http://localhost:3001/api"
}

export const API_CONFIG = {
  BASE_URL: getApiBaseUrl(),
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const
