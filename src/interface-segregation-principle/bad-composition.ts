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
 * Program that demonstrates a violation of the Interface Segregation Principle (ISP).
 * All animals are forced to implement behaviors they do not need.
 */

/**
 * Root class representing any animal.
 * This design violates ISP because every animal must implement
 * all movement methods regardless of its capabilities.
 */
abstract class Animal {
  /**
   * Forces all animals to walk.
   */
  abstract walk(): void;

  /**
   * Forces all animals to fly.
   */
  abstract fly(): void;

  /**
   * Forces all animals to swim.
   */
  abstract swim(): void;
}

class Duck extends Animal {
  walk(): void {
    console.log("Duck walking");
  }

  fly(): void {
    console.log("Duck flying");
  }

  swim(): void {
    console.log("Duck swimming");
  }
}

/**
 * Represents a dog.
 * Dogs cannot fly or swim naturally, but are forced to implement them.
 */
class Dog extends Animal {
  walk(): void {
    console.log("Dog walking");
  }

  fly(): void {
    throw new Error("Dog cannot fly");
  }

  swim(): void {
    console.log("Dog swimming (forced behavior)");
  }
}

/**
 * Represents a fish.
 * Fish cannot walk or fly but must still implement those methods.
 */
class Fish extends Animal {
  walk(): void {
    throw new Error("Fish cannot walk");
  }

  fly(): void {
    throw new Error("Fish cannot fly");
  }

  swim(): void {
    console.log("Fish swimming");
  }
}

/**
 * Usage example.
 */
function mainBadISP(): void {
  const animals: Animal[] = [new Dog(), new Fish()];

  animals.forEach(animal => animal.walk());
}

mainBadISP();