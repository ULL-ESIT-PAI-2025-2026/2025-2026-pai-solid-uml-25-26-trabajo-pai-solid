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
 * Program to represent a correct usage of the Dependency Inversion Principle (DIP).
 * This example uses an interface to decouple the manager from the storage mechanism.
 */

/**
 * Abstraction representing any generic storage system.
 */
interface StorageSystem {
  /**
   * Persists the given data.
   * @param documentData - The string data to be saved.
   */
  save(documentData: string): void;
}

/**
 * Concrete implementation for local storage.
 */
class LocalDiskStorage implements StorageSystem {
  save(documentData: string): void {
    console.log(`Saving document to local hard drive: ${documentData}`);
  }
}

/**
 * Concrete implementation for cloud storage.
 */
class CloudStorage implements StorageSystem {
  save(documentData: string): void {
    console.log(`Uploading document to the cloud: ${documentData}`);
  }
}

/**
 * High-level business logic module.
 * COMPLIANT: The DocumentManager depends solely on the StorageSystem abstraction.
 */
class ModernDocumentManager {
  private storage: StorageSystem;

  /**
   * Injects the specific storage system into the manager.
   * @param storageStrategy - The generic storage mechanism to utilize.
   */
  constructor(storageStrategy: StorageSystem) {
    this.storage = storageStrategy;
  }

  processAndSave(documentData: string): void {
    console.log('Processing document format...');
    this.storage.save(documentData);
  }
}

/**
 * Handles document processing by selecting the storage strategy via an index.
 * @param storageIndex - The numerical index of the desired storage type.
 * @param documentData - The content to save.
 */
function executeStorageByIndex(storageIndex: number, documentData: string): void {
  const availableStorages: StorageSystem[] = [
    new LocalDiskStorage(), // Index 0
    new CloudStorage()      // Index 1
  ];

  if (storageIndex < 0 || storageIndex >= availableStorages.length) {
    console.error('Error: Invalid storage strategy index.');
    return;
  }

  const selectedStorage = availableStorages[storageIndex];
  const documentManager = new ModernDocumentManager(selectedStorage);
  
  documentManager.processAndSave(documentData);
}