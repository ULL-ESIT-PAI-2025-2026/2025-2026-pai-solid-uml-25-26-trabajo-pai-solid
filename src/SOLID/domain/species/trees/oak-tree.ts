import { PlantBase } from '../../plants/plant.base';
import {
  Germinable,
  TropismResponsive,
} from '../../behaviors/plant-behaviors';
import { PlantClassification } from '../../classification/plant-classification';

/**
 * Representa un roble.
 */
export class OakTree
  extends PlantBase
  implements Germinable, TropismResponsive {

  constructor(id: string) {
    super(
      id,
      'Quercus robur',
      {
        kingdom: 'plantae',
        group: 'vascular',
        type: 'angiosperm',
        plantGroup: 'angiosperm',
        producesFlowers: true,
      } satisfies PlantClassification,
    );
  }

  public respondToEnvironment(factor: string): void {
    console.log(
      `${this.scientificName} responds to ${factor}.`,
    );
  }

  public reproduce(): void {
    console.log(`${this.scientificName} reproduces via acorns.`);
  }

  public germinate(): void {
    console.log(`${this.scientificName} germinates from an acorn.`);
  }
}