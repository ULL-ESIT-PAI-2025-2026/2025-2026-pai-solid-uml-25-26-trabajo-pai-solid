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
 * Program that demonstrates invariant violation using different types
 * of geometric figures with testing examples.
 */

import { Rectangle, Square } from './invariant-violation';

describe('LSP Violation: Rectangle vs Square', () => {
  
  /**
   * This function assumes it is working with a pure Rectangle.
   * It modifies the width and height assuming they are completely independent (Invariant).
   * 
   * @param rect The Rectangle to be transformed.
   * @returns The calculated area after transformation.
   */
  function transformAndCalculateArea(rect: Rectangle): number {
    rect.setWidth(5);
    rect.setHeight(4);

    // A 5x4 rectangle should always have an area of 20.
    return rect.getArea();
  }

  it('should calculate the correct area for a base Rectangle', () => {
    const rect = new Rectangle(2, 2);
    const area = transformAndCalculateArea(rect);
    
    // Works !!: The Rectangle respects its own contract and invariants.
    expect(area).toBe(20); 
  });

  it('should FAIL the expected behaviour when passing a Square', () => {
    const square = new Square(2);
    const area = transformAndCalculateArea(square);
    
    // Fails !!!!: The expected area was 20, but it returns 16 (LSP Violation).
    expect(area).not.toBe(20);
  });
});