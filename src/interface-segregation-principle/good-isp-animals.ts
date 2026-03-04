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
 * Program that demonstrates a correct application of the
 * Interface Segregation Principle (ISP).
 * Movement behaviors are divided into smaller interfaces.
 */

/**
 * Base class representing an animal identity.
 * Contains no forced movement behaviors.
 */
abstract class Animal {
  constructor(protected name: string) { }

  eat(): void {
    console.log(`${this.name} is eating`);
  }
  
  abstract describe(): string;
}

/**
 * Segregated movement interfaces.
 */
interface Walkable {
  walk(): void;
}

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

/**
 * Duck implements all movement behaviors it needs.
 */
class Duck extends Animal implements Walkable, Flyable, Swimmable {
  walk(): void {
    console.log("Duck walking");
  }

  fly(): void {
    console.log("Duck flying");
  }

  swim(): void {
    console.log("Duck swimming");
  }

  describe(): string {
    return "I am a duck";
  }
}

/**
 * Dog only implements what it needs.
 */
class Dog extends Animal implements Walkable, Swimmable {
  walk(): void {
    console.log("Dog walking");
  }

  swim(): void {
    console.log("Dog swimming");
  }

  describe(): string {
    return "I am a dog";
  }
}

/**
 * Fish only implements swimming behavior.
 */
class Fish extends Animal implements Swimmable {
  swim(): void {
    console.log("Fish swimming");
  }

  describe(): string {
    return "I am a fish";
  }
}

/**
 * Eagle implements walking and flying behaviors.
 */
class Eagle extends Animal implements Walkable, Flyable {
  walk(): void {
    console.log("Eagle walking");
  }

  fly(): void {
    console.log("Eagle flying");
  }

  describe(): string {
    return "I am an eagle";
  }
}

/**
 * Usage example.
 */
function mainGoodISP(): void {
  const swimmers: Swimmable[] = [new Dog("Rex"), new Fish("Nemo")];

  swimmers.forEach(swimingAnimal => {
    swimingAnimal.swim();
  });
}

mainGoodISP();