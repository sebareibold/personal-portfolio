"use client"

import { useState, useEffect } from "react"
import type { Project } from "../types/Project"
import { ProjectService } from "../services/projectService"

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)
        const projectsData = await ProjectService.getAllProjects()
        setProjects(projectsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const refetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const projectsData = await ProjectService.getAllProjects()
      setProjects(projectsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setLoading(false)
    }
  }

  return {
    projects,
    loading,
    error,
    refetchProjects,
  }
}

export const useProjectsByCategory = (categoria: string) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjectsByCategory = async () => {
      try {
        setLoading(true)
        setError(null)
        const projectsData = await ProjectService.getProjectsByCategory(categoria)
        setProjects(projectsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    if (categoria) {
      fetchProjectsByCategory()
    }
  }, [categoria])

  return {
    projects,
    loading,
    error,
  }
}
