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
 * Program that demonstrates the correct application of LSP
 * using interfaces to separate different geometric behaviors.
 */

/**
 * Common interface for all geometric shapes.
 * By using this, we only promise what all shapes can deliver.
 */
interface Shape {
  /**
   * Calculates the area of the shape.
   * 
   * @returns The area of the Shape.
   */
  getArea(): number;
}

/**
 * Represents a rectangle.
 * 
 * Now it only implements the Shape interface without forcing
 * its invariant rules onto other classes.
 */
class Rectangle implements Shape {
  /**
   * The class will be built around its width and height.
   * 
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   */
  constructor(private width: number, private height: number) {}

  /**
   * A standard setter for the attribute `width`.
   * 
   * @param width Width of the rectangle.
   */
  setWidth(width: number): void {
    this.width = width;
  }

  /**
   * A standard setter for the attribute `height`.
   * 
   * @param height Height of the rectangle.
   */
  setHeight(height: number): void {
    this.height = height;
  }

  /**
   * Calculates the area of the Rectangle.
   * 
   * @returns The area of the Rectangle.
   */
  getArea(): number {
    return this.width * this.height;
  }
}

/**
 * Represents a square.
 * 
 * By implementing Shape instead of extending Rectangle,
 * we avoid breaking any inherited invariants.
 */
class Square implements Shape {
  /**
   * We only need one side to determine the dimensions of a square.
   * 
   * @param side Length of the Square's side.
   */
  constructor(private side: number) {}

  /**
   * A standard setter for the side of the Square.
   * 
   * @param side Length of the Square's side.
   */
  setSide(side: number): void {
    this.side = side;
  }

  /**
   * Calculates the area of the Square.
   * 
   * @returns The area of the Square.
   */
  getArea(): number {
    return this.side * this.side;
  }
}

