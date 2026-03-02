/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas (PAI)
 *
 * @author Álvaro Pérez Ramos
 * @author Pablo García de los Reyes
 * @author Adrián Hernández Herrera
 * @since 26 FEB 2026
 *
 * This file defines the LivingBeing interface, which serves as a base for all living beings in the domain.
 */

/**
 * Represents a living being in the domain. This class serves as a base for all types of living beings, such as animals and plants.
 * It defines common properties and behaviors that all living beings share, such as growth, nutrition, reproduction, and life status.
 * The specific implementation of these behaviors is left to the subclasses that extend this base class.
 */
export interface LivingBeing {
  /** Identificador único */
  readonly id: string;

  /** Nombre científico del organismo */
  readonly scientificName: string;

  /** Edad en unidades abstractas (años, ciclos, etc.) */
  age: number;

  /**
   * Proceso de crecimiento del organismo.
   * La implementación concreta decide cómo ocurre.
   */
  grow(): void;

  /**
   * Proceso de nutrición.
   * Puede representar alimentación o fotosíntesis.
   */
  nourish(): void;

  /**
   * Proceso reproductivo del organismo.
   */
  reproduce(): void;

  /**
   * Indica si el organismo sigue vivo.
   */
  isAlive(): boolean;
}