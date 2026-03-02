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
 * This file defines the AnimalClassification interface, which extends the Classification interface to include specific properties related to animals. 
 * It includes properties for the type of skeleton (vertebrate or invertebrate) and the class of the animal (mammal, bird, reptile, fish, amphibian, insect, or arachnid). 
 * This interface is used to categorize animals based on their biological characteristics. 
 * It does not contain any behavior, as it is purely a data structure for holding classification information specific to animals.
 */

import { Classification } from './classification';

/**
 * Represents the type of skeleton an animal has.
 * This can be either 'vertebrate' for animals with a backbone or 'invertebrate' for animals without a backbone.
 */
export type SkeletonType =
  | 'vertebrate'
  | 'invertebrate';

/**
 * Represents the class of an animal. 
 * This can be one of the following: 'mammal', 'bird', 'reptile', 'fish', 'amphibian', 'insect', or 'arachnid'. 
 * This classification is based on the biological characteristics of the animal, such as its anatomy, physiology, and evolutionary history.
 */
export type AnimalClass =
  | 'mammal'
  | 'bird'
  | 'reptile'
  | 'fish'
  | 'amphibian'
  | 'insect'
  | 'arachnid';

/**
 * Represents the classification of an animal, which includes the kingdom, group, and type of the classification, 
 *   as well as specific properties related to animals such as the type of skeleton and the class of the animal. 
 * This interface is used to categorize animals based on their biological characteristics. 
 * It does not contain any behavior, as it is purely a data structure for holding classification information specific to animals.
 */
export interface AnimalClassification extends Classification {
  readonly skeleton: SkeletonType;
  readonly animalClass: AnimalClass;
}