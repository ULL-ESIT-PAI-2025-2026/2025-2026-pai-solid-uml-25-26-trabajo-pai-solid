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
 * This file defines the Classification interface, which represents a biological classification. 
 * It includes properties for the kingdom, group, and type of the classification. 
 * This interface is used to categorize living beings based on their biological characteristics. 
 * It does not contain any behavior, as it is purely a data structure for holding classification information.
 */

/**
 * Describe a biological classification, which includes the kingdom, group, and type of the classification.
 * This interface is used to categorize living beings based on their biological characteristics. 
 * It does not contain any behavior, as it is purely a data structure for holding classification information.
 */
export interface Classification {
  readonly kingdom: string;
  readonly group: string;
  readonly type: string;
}