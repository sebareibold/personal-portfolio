import Skill, { type ISkill } from "../models/skill.model"

export class SkillManager {
  /**
   * Crea una nueva habilidad.
   */
  public async createSkill(data: Partial<ISkill>): Promise<ISkill> {
    try {
      if (!data.nombre) {
        throw new Error("El nombre de la habilidad es requerido.")
      }

      const newSkill = new Skill(data as ISkill) // Aserción de tipo aquí
      await newSkill.save()
      return newSkill
    } catch (error) {
      if (error instanceof Error) {
        if ((error as any).code === 11000) {
          throw new Error("Ya existe una habilidad con este nombre.")
        } else if (error.name === "ValidationError") {
          throw new Error("Datos de habilidad inválidos.")
        }
      }
      console.error("Error al crear la habilidad:", error)
      throw new Error("No se pudo crear la habilidad.")
    }
  }

  /**
   * Obtiene todas las habilidades.
   */
  public async getAllSkills(): Promise<ISkill[]> {
    try {
      const skills = await Skill.find()
      return skills
    } catch (error) {
      console.error("Error al obtener las habilidades:", error)
      throw new Error("No se pudieron obtener las habilidades.")
    }
  }

  /**
   * Obtiene una habilidad por su ID.
   */
  public async getSkillById(id: string): Promise<ISkill | null> {
    try {
      const skill = await Skill.findById(id)
      return skill
    } catch (error) {
      console.error("Error al obtener la habilidad por ID:", error)
      throw new Error("No se pudo obtener la habilidad.")
    }
  }

  /**
   * Actualiza una habilidad por su ID.
   */
  public async updateSkill(id: string, data: Partial<ISkill>): Promise<ISkill | null> {
    try {
      const updatedSkill = await Skill.findByIdAndUpdate(id, data, { new: true, runValidators: true })
      return updatedSkill
    } catch (error) {
      if (error instanceof Error) {
        if ((error as any).code === 11000) {
          throw new Error("Ya existe otra habilidad con este nombre.")
        } else if (error.name === "ValidationError") {
          throw new Error("Datos de actualización de habilidad inválidos.")
        }
      }
      console.error("Error al actualizar la habilidad:", error)
      throw new Error("No se pudo actualizar la habilidad.")
    }
  }

  /**
   * Elimina una habilidad por su ID.
   */
  public async deleteSkill(id: string): Promise<boolean> {
    try {
      const result = await Skill.findByIdAndDelete(id)
      return result !== null
    } catch (error) {
      console.error("Error al eliminar la habilidad:", error)
      throw new Error("No se pudo eliminar la habilidad.")
    }
  }
}
