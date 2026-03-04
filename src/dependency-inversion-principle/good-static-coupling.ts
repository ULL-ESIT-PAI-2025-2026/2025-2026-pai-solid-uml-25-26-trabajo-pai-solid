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
 * This example fixes static coupling by using abstractions and dependency injection.
 */

/**
 * Abstraction representing a generic notification sender.
 */
interface NotificationSender {
  /**
   * Dispatches a welcome notification.
   * @param destinationAddress - The target user address.
   */
  sendWelcomeMessage(destinationAddress: string): void;
}

/**
 * Concrete implementation for email notifications.
 */
class SmtpEmailSender implements NotificationSender {
  sendWelcomeMessage(destinationAddress: string): void {
    console.log(`Sending welcome email to ${destinationAddress} via SMTP server...`);
  }
}

/**
 * Concrete implementation used strictly for unit testing.
 */
class MockNotificationSender implements NotificationSender {
  sendWelcomeMessage(destinationAddress: string): void {
    console.log(`[TEST] Mock notification successfully captured for ${destinationAddress}`);
  }
}

/**
 * High-level business logic module.
 * COMPLIANT: Depends on the NotificationSender abstraction, fully decoupled.
 */
class SecureAuthenticator {
  private notifier: NotificationSender;

  /**
   * Injects the specific notification strategy.
   * @param notificationStrategy - The generic notifier to utilize.
   */
  constructor(notificationStrategy: NotificationSender) {
    this.notifier = notificationStrategy;
  }

  /**
   * Registers a user and dispatches a notification using the injected strategy.
   * @param userEmail - The user's email address.
   */
  registerUser(userEmail: string): void {
    console.log(`Registering user ${userEmail} in the database...`);
    this.notifier.sendWelcomeMessage(userEmail);
  }
}

/**
 * Handles user registration by selecting the notification strategy via an index.
 * @param notificationIndex - The numerical index of the desired notification type.
 * @param userEmail - The email to register.
 */
function executeRegistrationByIndex(notificationIndex: number, userEmail: string): void {
  const availableNotifiers: NotificationSender[] = [
    new SmtpEmailSender(),      // Index 0: Production
    new MockNotificationSender() // Index 1: Testing
  ];

  if (notificationIndex < 0 || notificationIndex >= availableNotifiers.length) {
    console.error('Error: Invalid notification strategy index.');
    return;
  }

  const selectedNotifier = availableNotifiers[notificationIndex];
  const authenticator = new SecureAuthenticator(selectedNotifier);
  
  authenticator.registerUser(userEmail);
}