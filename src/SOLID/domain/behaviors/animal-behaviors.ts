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
 * This file defines the behaviors related to animals in the domain. 
 * It includes interfaces for movement, walking, flying, and swimming, which are common behaviors of animals. 
 * The specific implementation of these behaviors is left to the concrete classes that implement these interfaces.
 */

/**
 * Capacity to move or displace itself in some way.
 */
export interface Movable {
  move(): void;
}

/**
 * Capacity to walk.
 */
export interface Walkable {
  walk(): void;
}

/**
 * Capacity to fly.
 */
export interface Flyable {
  fly(): void;
}

/**
 * Capacity to swim.
 */
export interface Swimmable {
  swim(): void;
}