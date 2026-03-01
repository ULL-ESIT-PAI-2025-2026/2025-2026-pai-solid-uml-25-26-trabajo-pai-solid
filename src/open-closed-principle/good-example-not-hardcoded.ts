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
 * Program to represent a correct usage of the Open/Closed Principle (OCP).
 * This example demonstrates how to use dependency injection and abstractions
 * to extend database support without modifying the repository class.
 */

/**
 * Represents a generic database connection strategy.
 */
interface Database {
  /**
   * Persists data into the storage system.
   * @param dataToSave - The string representation of the data to store.
   */
  save(dataToSave: string): void;
}

/**
 * Concrete implementation for MySQL storage.
 */
class MySqlDatabase implements Database {
  /**
   * Saves data into a MySQL database.
   * @param dataToSave - The data to store.
   */
  save(dataToSave: string): void {
    console.log(`Saving to MySQL: ${dataToSave}`);
  }
}

/**
 * Concrete implementation for PostgreSQL storage.
 * Demonstrates system extension without modifying the repository.
 */
class PostgreSqlDatabase implements Database {
  /**
   * Saves data into a PostgreSQL database.
   * @param dataToSave - The data to store.
   */
  save(dataToSave: string): void {
    console.log(`Saving to PostgreSQL: ${dataToSave}`);
  }
}

/**
 * Repository class that handles user data storage.
 * Compliant with OCP: It depends on the Database abstraction.
 */
class UserRepository {
  private database: Database;

  /**
   * Initializes the repository with a specific database strategy.
   * @param storageStrategy - The database implementation to use.
   */
  constructor(storageStrategy: Database) {
    this.database = storageStrategy;
  }

  /**
   * Persists the user information using the injected strategy.
   * @param userName - The name of the user to be saved.
   */
  saveUser(userName: string): void {
    this.database.save(userName);
  }
}