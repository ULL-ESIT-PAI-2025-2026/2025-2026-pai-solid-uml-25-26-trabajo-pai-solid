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
 * This file defines the behaviors related to plants in the domain. 
 * It includes interfaces for tropism response and germination, which are specific behaviors of plants. 
 * The specific implementation of these behaviors is left to the concrete classes that implement these interfaces.
 */

/**
 * Capacity to respond to environmental factors such as light, gravity, humidity, etc.
 */
export interface TropismResponsive {
  /**
   * Represents the response of the plant to a given environmental factor.
   * 
   * @param factor - A string representing the environmental factor to which the plant will respond. This could be anything from light, gravity, humidity, etc.
   */
  respondToEnvironment(factor: string): void;
}

/**
 * Capacity to germinate, which is the process by which a plant grows from a seed.
 */
export interface Germinable {
  /**
   * Represents the germination process of the plant. This is how the plant grows from a seed.
   */
  germinate(): void;
}