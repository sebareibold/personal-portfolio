import type { Project } from "../../types/Project"
import GlassSurface from "../ReactBits/GlassSurface/GlassSurface"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (categoria: string) => {
    const colors = {
      "Web App": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      API: "bg-green-500/20 text-green-300 border-green-500/30",
      "Data Science": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      Mobile: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    }
    return colors[categoria as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  return (
    <GlassSurface
      className="w-full max-w-sm mx-auto"
      displace={6}
      distortionScale={-60}
      redOffset={1}
      greenOffset={4}
      blueOffset={6}
      brightness={3}
      opacity={0.1}
      mixBlendMode="normal"
    >
      <div className="p-6 h-full flex flex-col">
        {/* Imagen del proyecto */}
        <div className="relative mb-4 rounded-lg overflow-hidden">
          <img
            src={project.imagen || "/placeholder.svg"}
            alt={project.descripcion}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.categoria)}`}
            >
              {project.categoria}
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex-grow flex flex-col">
          <p className="text-white/90 text-sm mb-4 flex-grow leading-relaxed">{project.descripcion}</p>

          {/* Tecnologías */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.tecnologias.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-white/10 text-white/80 rounded-md text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Fecha */}
          <p className="text-white/60 text-xs mb-4">{formatDate(project.fecha)}</p>

          {/* Enlaces */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.link_github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href={project.link_produccion}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-center py-2 px-4 rounded-lg transition-all duration-200 text-sm font-medium border border-blue-500/30"
            >
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    </GlassSurface>
  )
}
