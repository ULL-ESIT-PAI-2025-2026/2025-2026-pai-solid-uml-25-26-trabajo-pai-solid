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
 * This file defines the AnimalBase class, which serves as a base for all animals in the domain. It extends the LivingBeingBase class and implements the Animal interface.
 * It provides common properties and behaviors that all animals share, such as movement, reaction to stimuli, nutrition, and reproduction.
 * The specific implementation of the reproduction behavior is left to the subclasses that extend this base class.
 */

import { LivingBeingBase } from '../living-being/living-being.base';
import { AnimalClassification } from '../classification/animal-classification';
import { Animal } from './animal';

/**
 * Partial reusable implementation.
 * Contains common logic for all animals.
 */
export abstract class AnimalBase extends LivingBeingBase implements Animal {
  
  /** 
   * Creates an instance of AnimalBase.
   * 
   * @param id - A unique identifier for the animal.
   * @param scientificName - The scientific name of the animal.
   * @param classification - The classification of the animal, which provides information about its taxonomy and characteristics.
  */
  protected constructor(
    id: string,
    scientificName: string,
    protected readonly classification: AnimalClassification,
  ) {
    super(id, scientificName);
  }

  /**
   * Represents the movement behavior of the animal.
   */
  move(): void {
    console.log(`${this.scientificName} moves.`);
  }

  /**
   * Represents the reaction of the animal to a given stimulus.
   * 
   * @param stimulus - A string representing the stimulus to which the animal will react. This could be anything from a sound, a sight, a smell, etc.
   */
  reactToStimulus(stimulus: string): void {
    console.log(
      `${this.scientificName} reacts to ${stimulus}`,
    );
  }

  /**
   * Represents the nutrition process of the animal. This could involve consuming food, absorbing nutrients, etc.
   */
  nourish(): void {
    console.log(`${this.scientificName} consumes food.`);
  }

  /**
   * Represents the reproduction process of the animal. The specific implementation of how the animal reproduces is left to the concrete classes that extend this base class.
   */
  abstract reproduce(): void;
}