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
 * Program to represent a bad usage of the Dependency Inversion Principle (DIP).
 * This example demonstrates tight coupling by using the 'new' keyword.
 */

/**
 * Low-level module handling local file storage.
 */
class LocalFileSystem {
  /**
   * Saves data to the local disk.
   * @param documentData - The string data to be saved.
   */
  save(documentData: string): void {
    console.log(`Saving document to local hard drive: ${documentData}`);
  }
}

/**
 * High-level business logic module.
 * VIOLATION: The DocumentManager is completely coupled to the LocalFileSystem.
 */
class DocumentManager {
  private fileSystem: LocalFileSystem;

  constructor() {
    // The hardcoded dependency is created right here
    this.fileSystem = new LocalFileSystem();
  }

  /**
   * Processes and saves a document.
   * @param documentData - The string data to process.
   */
  processAndSave(documentData: string): void {
    console.log('Processing document format...');
    this.fileSystem.save(documentData);
  }
}