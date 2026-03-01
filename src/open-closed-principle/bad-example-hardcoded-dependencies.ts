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
 * Program to represent a bad usage of the Open/Closed Principle (OCP).
 * This example demonstrates tight coupling by hardcoding a concrete class
 * dependency. Ask the class what happens if we need a PostgreSQL database.
 */

/**
 * Concrete implementation of a MySQL database.
 */
class MySqlDatabase {
  /**
   * Saves user data into the MySQL database.
   * @param userData - The string representation of the user data to save.
   */
  save(userData: string): void {
    console.log(`Saving to MySQL: ${userData}`);
  }
}

/**
 * Repository class that handles user data storage.
 * Non-compliant with OCP: It is tightly coupled to MySqlDatabase.
 */
class UserRepository {
  private database: MySqlDatabase;

  /**
   * Initializes the repository by tightly coupling it to a specific database.
   * This hardcoded dependency prevents extending the class to other databases.
   */
  constructor() {
    this.database = new MySqlDatabase();
  }

  /**
   * Persists the user information.
   * @param userName - The name of the user to be saved.
   */
  saveUser(userName: string): void {
    this.database.save(userName);
  }
}