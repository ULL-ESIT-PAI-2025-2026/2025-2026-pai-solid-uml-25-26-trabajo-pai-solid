/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas (PAI)
 *
 * @author Álvaro Pérez Ramos
 * @author Pablo García de los Reyes
 * @author Adrián Hernández Herrera
 * @since 01 MAR 2026
 *
 *  Program that demonstrates a compliance of the `Liskov Substitution Principle (LSP)`, 
 *  using different types of birds and their ability to fly.
 */

/**
 * Represents any type of bird.
 *
 * This class will no longer violate the Liskov Substitution Principle (LSP)
 * when the correct abstraction used.
 */
abstract class Bird {
  /**
   * @desc Return the name of the bird species.
   * 
   * This method was added for `research purposes`.
   */
  abstract birdName(): string;
}

/**
 * Interface Represents flying birds.
 * 
 * It helps the correct encapsulationg of the `flying` behavior.
 * Now only flying birds will fly.
 */
interface FlyingBird {
   /**
   * Makes the bird fly.
   *
   * Contract: After calling this method, the bird is expected to
   * successfully perform a flying action without throwing errors.
   */
  fly(): void;
}

/** 
 * Represents a Canary.
 * 
 * This class will work as intended, given the canaries' ability to fly.
 */
class Canary extends Bird implements FlyingBird {
  /**
   * @desc Return the name of the bird species (Canary).
   */ 
  override birdName(): string {
    return 'Canary';
  }

  /**
   * Makes a canary fly.
   * 
   * This implementation respects the contract defined in the base class.
   */
  fly(): void {
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
   * @desc Return the name of the bird species (Penguin).
   */ 
  override birdName(): string {
    return 'Penguin';
  }
}

/**
 * @desc A birdWatcher will always know the birds' species 
 * 
 * @param bird Bird that the birdwacher saw.
 */
function birdWatcher(bird: Bird): void {
  console.log(`Look, a ${bird.birdName()}!!!`);
}

/**
 * This function wont be a problem anymore !!!
 * 
 * @param bird Bird ready to fly through a hole.
 */
function flythroughHole(bird: FlyingBird): void {
  bird.fly();
  console.log('Sweet, the bird could make it through'!!!);
}

/**
 * Usage example
 */
function main(): void {
  birdWatcher(new Canary());
  birdWatcher(new Penguin);
  flythroughHole(new Canary());
  // flythroughHole(new Penguin()); // Penguin wont match the class type !!!
}

main();