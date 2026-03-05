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
 * This file defines the Trout class, which represents a trout in the domain.
 */

import { AnimalBase } from '../../animal/animal.base';
import { Swimmable } from '../../behaviors/animal-behaviors';
import { AnimalClassification } from '../../classification/animal-classification';

/**
 * Representa una trucha.
 */
export class Trout
  extends AnimalBase
  implements Swimmable {

  constructor(id: string) {
    super(
      id,
      'Salmo trutta',
      {
        kingdom: 'animalia',
        group: 'vertebrate',
        type: 'chordate',
        skeleton: 'vertebrate',
        animalClass: 'fish',
      } satisfies AnimalClassification,
    );
  }

  swim(): void {
    console.log(`${this.scientificName} swims upstream.`);
  }

  reproduce(): void {
    console.log(`${this.scientificName} reproduces by spawning.`);
  }
}