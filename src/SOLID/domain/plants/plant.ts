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
 * This file defines the Plant interface, which represents a plant in the domain. 
 * It extends the LivingBeing interface and includes a method for photosynthesis, which is how plants nourish themselves by converting light energy into chemical energy. 
 * The specific implementation of the photosynthesis process is left to the concrete classes that implement this interface.
 */

import { LivingBeing } from '../living-being/living-being';

/**
 * Represents a plant in the domain.
 */
export interface Plant extends LivingBeing {
  /**
   * Represents the photosynthesis process of the plant. 
   * This is how the plant nourishes itself by converting light energy into chemical energy. 
   * The specific implementation of how the plant performs photosynthesis is left to the concrete classes that implement this interface.
   */
  photosynthesize(): void;
}