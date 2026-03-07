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
 * Program that demonstrates invariant violation 
 * using different types of geometric figures.
 */

/** @desc Represents a rectangle. */
export class Rectangle {
  
  /**
   * The class will be built around its width an height.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   */
  constructor(protected width: number, protected height: number) {}
  
  /**
   * A standar setter for the attribute `width`.
   * @param width Width of the rectangle.
   */
  setWidth(width: number): void { this.width = width; }
  
  /**
   * A standar setter for the attribute `height`.
   * @param height Height of the rectangle.
   */
  setHeight(height: number): void { this.height = height; }
  
  /**
   * This is a really simple function, but be aware: 
   * Something unexpected will happend shordly !!
   * @returns The area of the Rectangle.
   */
  getArea(): number { return this.width * this.height; }
}

/**
 * Represents a square
 * This class wont follow the invariants defined by its supperclass,
 * leading to an unexpected behaviour.
 */
export class Square extends Rectangle {
  
  /**
   * We only need one side to determine the dimensions of a square
   * @param side Width/Height of the Square
   */
  constructor(side: number) {
    super(side, side);
  }
  
  /**
   * We must fix both sides of the Square (invariant violation)
   * @param width Width of the Square
   */
  override setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }
  
  /**
   * We must fix both sides of the Square (invariant violation)
   * @param side Height of the Square
   */
  override setHeight(height: number): void {
    this.width = height;
    this.height = height;
  }
}

/**
 * This funtion will try to make several modifications
 * to the object and then return its area.
 * @param rectangle Rectangle to be used.
 */
function magicalArea(rectangle: Rectangle): number {
  rectangle.setWidth(5);
  rectangle.setHeight(4);
  return rectangle.getArea(); 
}

/** @desc Usage example */
function mainInvariantViolation() {
  const side: number = 2;
  console.log(magicalArea(new Rectangle(side, side))); // 20
  console.log(magicalArea(new Square(side)));          // 16 !!!!
}