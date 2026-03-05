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
 * This file defines the Animal interface, which represents an animal in the domain. 
 * It extends the LivingBeing interface and includes methods for movement and reaction to stimuli, which are common behaviors of animals. 
 * The specific implementation of these behaviors is left to the concrete classes that implement this interface.
 */

import { LivingBeing } from '../living-being/living-being';

/**
 * Represents an animal in the domain. 
 */
export interface Animal extends LivingBeing {
  /**
   * Represents the movement behavior of the animal. 
   * The specific implementation of how the animal moves is left to the concrete classes that implement this interface.
   */
  move(): void;

  /**
   * Represents the reaction of the animal to a given stimulus. 
   * The specific implementation of how the animal reacts to different stimuli is left to the concrete classes that implement this interface.
   *
   * @param stimulus - A string representing the stimulus to which the animal will react. This could be anything from a sound, a sight, a smell, etc.
   */
  reactToStimulus(stimulus: string): void;
}