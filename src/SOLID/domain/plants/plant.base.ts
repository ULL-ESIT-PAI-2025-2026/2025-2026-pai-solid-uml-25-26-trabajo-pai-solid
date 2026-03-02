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
 * This file defines the PlantBase class, which serves as a base for all plants in the domain. It extends the LivingBeingBase class and implements the Plant interface.
 * It provides common properties and behaviors that all plants share, such as growth, nutrition through photosynthesis, and reproduction.
 * The specific implementation of the reproduction behavior is left to the subclasses that extend this base class.
 */

import { LivingBeingBase } from '../living-being/living-being.base';
import { PlantClassification } from '../classification/plant-classification';
import { Plant } from './plant';

/**
 * Partial reusable implementation.
 * Contains common logic for all plants.
 */
export abstract class PlantBase extends LivingBeingBase implements Plant {
  /**
   * Creates an instance of PlantBase.
   * 
   * @param id - A unique identifier for the plant.
   * @param scientificName - The scientific name of the plant.
   * @param classification - The classification of the plant, which provides information about its taxonomy and characteristics.
   */
  protected constructor(
    id: string,
    scientificName: string,
    protected readonly classification: PlantClassification,
  ) {
    super(id, scientificName);
  }

  /**
   * Represents the nutrition process of the plant. For plants, this involves photosynthesis, which is how they convert light energy into chemical energy to nourish themselves.
   */
  public nourish(): void {
    this.photosynthesize();
  }

  /**
   * Represents the photosynthesis process of the plant. This is how the plant nourishes itself by converting light energy into chemical energy. 
   * The specific implementation of how the plant performs photosynthesis is left to the concrete classes that extend this base class.
   */
  public photosynthesize(): void {
    console.log(`${this.scientificName} performs photosynthesis.`);
  }

  /**
   * Represents the reproduction process of the plant. 
   * The specific implementation of how the plant reproduces is left to the concrete classes that extend this base class.
   */
  public abstract reproduce(): void;
}