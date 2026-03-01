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
 * This example demonstrates how to use abstractions (interfaces) to allow
 * extending the system with new payment methods without modifying existing code.
 */

/**
 * Represents a generic payment method strategy.
 */
interface PaymentMethod {
  /**
   * Executes the payment transaction.
   * @param amountToCharge - The monetary amount to be charged.
   */
  pay(amountToCharge: number): void;
}

/**
 * Concrete implementation for Credit Card payments.
 */
class CreditCardPayment implements PaymentMethod {
  /**
   * Processes a charge using a credit card.
   * @param amountToCharge - The monetary amount to be charged.
   */
  pay(amountToCharge: number): void {
    console.log(`Charging $${amountToCharge} using a Credit Card`);
  }
}

/**
 * Concrete implementation for PayPal payments.
 */
class PayPalPayment implements PaymentMethod {
  /**
   * Processes a charge through a PayPal account.
   * @param amountToCharge - The monetary amount to be charged.
   */
  pay(amountToCharge: number): void {
    console.log(`Charging $${amountToCharge} via PayPal`);
  }
}

/**
 * NEW CLASS, we can create new payment methods without changing
 * the written code, just adding a new class implementing the
 * interface.
 * 
 * Concrete implementation for Cryptocurrency payments.
 * Demonstrates system extension without modifying existing processors.
 */
class CryptoPayment implements PaymentMethod {
  /**
   * Processes a charge using Cryptocurrency.
   * @param amountToCharge - The monetary amount to be charged.
   */
  pay(amountToCharge: number): void {
    console.log(`Charging $${amountToCharge} with Cryptocurrency`);
  }
}

/**
 * Processor class that handles payments agnostically.
 * Compliant with OCP: depends on the PaymentMethod abstraction.
 */
class PaymentProcessor {
  /**
   * Processes the payment using the provided payment method.
   * @param paymentStrategy - The specific payment method to utilize.
   * @param amountToCharge - The monetary amount to process.
   */
  process(paymentStrategy: PaymentMethod, amountToCharge: number): void {
    paymentStrategy.pay(amountToCharge);
  }
}