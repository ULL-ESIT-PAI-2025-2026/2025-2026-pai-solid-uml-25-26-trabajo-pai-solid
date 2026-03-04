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
 * This example demonstrates tight coupling by using static methods.
 */

/**
 * Low-level utility class with a static method.
 */
class StaticEmailUtility {
  /**
   * Sends an email directly.
   * @param userEmail - The destination address.
   */
  static sendWelcomeEmail(userEmail: string): void {
    console.log(`Sending welcome email to ${userEmail} via SMTP server...`);
  }
}

/**
 * High-level business logic module.
 * VIOLATION: The SystemAuthenticator is permanently glued to StaticEmailUtility.
 */
class SystemAuthenticator {
  /**
   * Registers a user and sends a static notification.
   * @param userEmail - The user's email address.
   */
  registerUser(userEmail: string): void {
    console.log(`Registering user ${userEmail} in the database...`);
    // Static coupling happening here
    StaticEmailUtility.sendWelcomeEmail(userEmail);
  }
}