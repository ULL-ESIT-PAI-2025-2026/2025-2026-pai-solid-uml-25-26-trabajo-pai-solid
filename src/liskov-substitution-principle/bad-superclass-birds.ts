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
 * Program that demonstrates an incorrect compliance of the `Liskov Substitution
 *  Principle (LSP)`, using different types of birds and their ability to fly.
 */

'use strict';

/**
 * Represents any type of bird.
 *
 * This class intentionally violates the Liskov Substitution Principle (LSP)
 * when extended by types that cannot fulfill the behavioral contract of `fly`.
 */
class Bird {
  /** 
   * Name assigned to the bird. 
   */
  protected name: string;

  /**
   * Creates a new Bird instance.
   *
   * @param name The name of the bird.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Makes the bird fly.
   *
   * Contract: After calling this method, the bird is expected to
   * successfully perform a flying action without throwing errors.
   */
  fly(): void {
    console.log(`${this.name} is flying in the blue sky.`);
  }
}

/** 
 * Represents a Canary.
 * 
 * This class will work as intended, given the canaries' ability to fly.
 */
class Canary extends Bird {
  /**
   * Creates a new Canary instance.
   *
   * @param name The name of the canary.
   */
  constructor(name: string) {
    super(name);
  }

  /**
   * Makes a canary fly.
   * 
   * This implementation respects the contract defined in the base class.
   */
  override fly(): void {
    console.log(`${this.name} the canary is flying in the blue sky`);
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
   * Creates a new Penguin instance.
   *
   * @param name The name of the penguin.
   */
  constructor(name: string) {
    super(name);
  }

  /**
   * Attempts to make the penguin fly.
   *
   * @throws Error Always thrown because penguins cannot fly !!!.
   */
  override fly(): void {
    throw new Error(`Oops, ${this.name} cannot fly!`);
  }
}

/**
 * Usage example
 */
function main(): void {
  let bird: Bird = new Canary('Piolín');
  bird.fly(); // No issue at all
  bird = new Penguin('Skipper');
  bird.fly(); // Error: Penguins cannot fly !!!
}