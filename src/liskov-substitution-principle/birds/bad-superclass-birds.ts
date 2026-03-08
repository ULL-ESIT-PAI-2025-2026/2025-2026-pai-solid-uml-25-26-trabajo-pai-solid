/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas (PAI)
 *
 * @author Álvaro Pérez Ramos
 * @author Pablo García de los Reyes
 * @author Adrián Hernández Herrera
 * @since 03 MAR 2026
 *
 * Program that demonstrates an incorrect compliance of the `Liskov Substitution
 *  Principle (LSP)`, using different types of birds and their ability to fly.
 */

/**
 * Represents any type of bird.
 *
 * This class intentionally violates the Liskov Substitution Principle (LSP)
 * when extended by types that cannot fulfill the behavioral contract of `fly`.
 */
abstract class Bird {
  /**
   * Return the name of the bird species.
   * 
   * This method was added for `research purposes`.
   */
  abstract birdName(): string;

  /**
   * Makes the bird fly.
   *
   * Contract: After calling this method, the bird is expected to
   * successfully perform a flying action without throwing errors.
   */
  abstract fly(): void;
}

/** 
 * Represents a Canary.
 * 
 * This class will work as intended, given the canaries' ability to fly.
 */
class Canary extends Bird {
  /**
   * Return the name of the bird species (Canary).
   */ 
  override birdName(): string {
    return 'Canary';
  }

  /**
   * Makes a canary fly.
   * 
   * This implementation respects the contract defined in the base class.
   */
  override fly(): void {
    console.log(`The ${this.birdName()} is flying ...`);
  }
}

/**
 * Represents a penguin.
 *
 * This class violates the Liskov Substitution Principle because
 * penguins cannot fulfill the behavioral expectations defined in `Bird`.
 */
class Penguin extends Bird {
  /**
   * Return the name of the bird species (Penguin).
   */ 
  override birdName(): string {
    return 'Penguin';
  }
  
  /**
   * Attempts to make the penguin fly.
   *
   * @throws Error Always thrown because penguins cannot fly !!!.
   */
  override fly(): void {
    throw new Error(`Oops, ${this.birdName()}s cannot fly!`);
  }
}

/**
 * A bird is supose to fly over a hole.
 * Unfortunatelly, Penguins Cannot fly !!!
 * 
 * @param bird Bird ready to fly through a hole.
 */
function flythroughHole(bird: Bird): void {
  bird.fly();
  console.log('Sweet, the bird could make it through'!!!);
}

/**
 * Usage example
 */
function mainBadSuperclass(): void {
  flythroughHole(new Canary());
  flythroughHole(new Penguin()); // Error: Penguins cannot fly !!!
}

mainBadSuperclass();