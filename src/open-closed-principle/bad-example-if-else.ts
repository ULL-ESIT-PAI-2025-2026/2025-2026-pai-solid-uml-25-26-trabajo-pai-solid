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
 * Program to represent a bad usage of the Open Closed principle. This is an example 
 * of a bad class implementation. Ask the class if they can found what is not good
 * and why.
 */

/**
 * Class representing a Credit Card payment method.
 */
class CreditCardPayment {
  /**
   * Processes a charge using a credit card.
   * @param amountToCharge - The total monetary amount to deduct.
   */
  public chargeCard(amountToCharge: number): void {
    console.log(`Charging $${amountToCharge} using a Credit Card.`);
  }
}

/**
 * Class representing a PayPal payment method.
 */
class PayPalPayment {
  /**
   * Processes a charge through a PayPal account.
   * @param amountToCharge - The total monetary amount to deduct.
   */
  public sendToPayPal(amountToCharge: number): void {
    console.log(`Charging $${amountToCharge} via PayPal.`);
  }
}

/**
 * Processor class that handles different types of payments.
 */
class LegacyPaymentProcessor {
  /**
   * Processes a payment by checking the specific instance type.
   * @param paymentMethod - The specific payment method instance.
   * @param amountToCharge - The total amount to process.
   */
  public process(paymentMethod: CreditCardPayment | PayPalPayment, amountToCharge: number): void {
    if (paymentMethod instanceof CreditCardPayment) {
      paymentMethod.chargeCard(amountToCharge);
    } else if (paymentMethod instanceof PayPalPayment) {
      paymentMethod.sendToPayPal(amountToCharge);
    }
  }
}