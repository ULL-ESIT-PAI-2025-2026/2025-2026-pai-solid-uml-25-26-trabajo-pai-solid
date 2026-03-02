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
 * This file defines the LivingBeing class, which serves as a base for all living beings in the domain.
 * It provides common properties and behaviors that all living beings share, such as growth, nutrition, reproduction, and life status.
 * The specific implementation of these behaviors is left to the subclasses that extend this base class.
 */

import { LivingBeing } from './living-being';

/**
 * Implementación parcial reutilizable.
 * Contiene lógica común a todos los seres vivos.
 */
export abstract class LivingBeingBase implements LivingBeing {
  public age = 0;

  protected alive = true;

  constructor(
    public readonly id: string,
    public readonly scientificName: string,
  ) { }

  public grow(): void {
    this.age += 1;
  }

  public abstract nourish(): void;

  public abstract reproduce(): void;

  public isAlive(): boolean {
    return this.alive;
  }

  protected die(): void {
    this.alive = false;
  }
}