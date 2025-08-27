import { useState } from "react"
import { useProjects } from "../../hooks/useProjects"
import ProjectCard from "../ProjectCard/ProjectCard"
import GlassSurface from "../ReactBits/GlassSurface/GlassSurface"

export default function Proyectos() {
  const { projects, loading, error, refetchProjects } = useProjects()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "Web App", "API", "Data Science", "Mobile"]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.categoria === selectedCategory)

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-transparent text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Mis Proyectos</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-transparent text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Mis Proyectos</h2>
          <div className="text-center">
            <p className="text-red-400 mb-4">Error al cargar los proyectos: {error}</p>
            <button
              onClick={refetchProjects}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-balance">Mis Proyectos</h2>
        <p className="text-white/80 text-center mb-12 text-pretty max-w-2xl mx-auto">
          Explora mi portafolio de proyectos de desarrollo web, APIs y análisis de datos.
        </p>

        {/* Filtros de categoría */}
        <div className="flex justify-center mb-12">
          <GlassSurface
            className="inline-flex"
            displace={4}
            distortionScale={-40}
            redOffset={1}
            greenOffset={3}
            blueOffset={5}
            brightness={2}
            opacity={0.08}
            mixBlendMode="normal"
          >
            <div className="flex gap-2 p-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category === "all" ? "Todos" : category}
                </button>
              ))}
            </div>
          </GlassSurface>
        </div>

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center text-white/60">
            <p>No hay proyectos disponibles para la categoría seleccionada.</p>
          </div>
        )}

        {/* Estadísticas */}
        <div className="mt-16 text-center">
          <GlassSurface
            className="inline-flex"
            displace={4}
            distortionScale={-40}
            redOffset={1}
            greenOffset={3}
            blueOffset={5}
            brightness={2}
            opacity={0.08}
            mixBlendMode="normal"
          >
            <div className="px-8 py-4">
              <p className="text-white/80 text-sm">
                <span className="font-bold text-white">{projects.length}</span> proyectos completados
              </p>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  )
}
