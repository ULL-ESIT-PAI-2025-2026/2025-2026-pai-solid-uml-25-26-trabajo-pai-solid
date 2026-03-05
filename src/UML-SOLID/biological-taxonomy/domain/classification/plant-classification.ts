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
 * This file defines the PlantClassification interface, which extends the Classification interface to include specific properties related to plants. 
 * It includes properties for the plant group (angiosperm, gymnosperm, fern, moss, or algae) and whether the plant produces flowers. 
 * This interface is used to categorize plants based on their biological characteristics. 
 * It does not contain any behavior, as it is purely a data structure for holding classification information specific to plants.
 */

import { Classification } from './classification';

/**
 * Represents the group of a plant. 
 * This can be one of the following: 'angiosperm', 'gymnosperm', 'fern', 'moss', or 'algae'. 
 * This classification is based on the biological characteristics of the plant, such as its reproductive structures, life cycle, and evolutionary history.
 */
export type PlantGroup =
  | 'angiosperm'
  | 'gymnosperm'
  | 'fern'
  | 'moss'
  | 'algae';

/**
 * Represents the classification of a plant, which includes the kingdom, group, and type of the classification, 
 *   as well as specific properties related to plants such as the plant group and whether the plant produces flowers. 
 * This interface is used to categorize plants based on their biological characteristics. 
 * It does not contain any behavior, as it is purely a data structure for holding classification information specific to plants.
 */
export interface PlantClassification extends Classification {
  readonly plantGroup: PlantGroup;
  readonly producesFlowers: boolean;
}