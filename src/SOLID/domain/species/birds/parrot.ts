import { AnimalBase } from '../../animal/animal.base';
import { Walkable, Flyable, } from '../../behaviors/animal-behaviors';
import { AnimalClassification } from '../../classification/animal-classification';

/**
 * Representa un loro.
 */
export class Parrot
  extends AnimalBase
  implements Walkable, Flyable {

  constructor(id: string) {
    super(
      id,
      'Psittaciformes',
      {
        kingdom: 'animalia',
        group: 'vertebrate',
        type: 'chordate',
        skeleton: 'vertebrate',
        animalClass: 'bird',
      } satisfies AnimalClassification,
    );
  }

  walk(): void {
    console.log(`${this.scientificName} walks using its claws.`);
  }

  fly(): void {
    console.log(`${this.scientificName} flies through the air.`);
  }

  reproduce(): void {
    console.log(`${this.scientificName} lays eggs.`);
  }
}