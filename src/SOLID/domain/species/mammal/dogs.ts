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
 * This file defines the Dog class, which represents a domestic dog in the domain. 
 * It extends the AnimalBase class and implements the Walkable interface, which means that it has the ability to walk. 
 * The Dog class provides specific implementations for the walk and reproduce methods, which are behaviors common to dogs. 
 * The classification of the dog is defined in the constructor, which includes its kingdom, group, type, skeleton, and animal class.
 */

import { AnimalBase } from '../../animal/animal.base';
import { Walkable } from '../../behaviors/animal-behaviors';
import { AnimalClassification } from '../../classification/animal-classification';

/**
 * Representa un perro doméstico.
 */
export class Dog extends AnimalBase implements Walkable {

  constructor(id: string) {
    super(
      id,
      'Canis lupus familiaris',
      {
        kingdom: 'animalia',
        group: 'vertebrate',
        type: 'chordate',
        skeleton: 'vertebrate',
        animalClass: 'mammal',
      } satisfies AnimalClassification,
    );
  }

  /**
   * Implementación específica del caminar.
   */
  walk(): void {
    console.log(`${this.scientificName} walks on four legs.`);
  }

  /**
   * Reproducción específica de mamíferos.
   */
  reproduce(): void {
    console.log(`${this.scientificName} reproduces viviparously.`);
  }
}