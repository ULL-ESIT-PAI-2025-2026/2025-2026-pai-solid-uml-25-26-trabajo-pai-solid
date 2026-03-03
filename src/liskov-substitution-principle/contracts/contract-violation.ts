/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas (PAI)
 *
 * @author Álvaro Pérez Ramos
 * @author Pablo García de los Reyes
 * @author Adrián Hernández Herrera
 * @since 03 MAR 2026
 *
 * Program that demonstrates Contract Violation (Preconditions and Postconditions)
 * breaking the Liskov Substitution Principle in a fun way.
 */

/**
 * The Parent Class (The Contract)
 * Represents a standard, honest Pizzeria.
 */
class RegularPizzeria {
  /**
   * Orders a pizza based on the money provided.
   *
   * Contract rules:
   * - Precondition: You must pay at least 10 bucks.
   * - Postcondition: You `always` get a baked, edible pizza string.
   *
   * @param money The amount of money you pay.
   * @returns A string representing your cooked pizza.
   */
  orderPizza(money: number): string {
    if (money < 10) {
      throw new Error('Not enough money! A pizza costs 10 bucks.'); 
    }
    return 'Delicious Hot Pizza'; 
  }
}

/**
 * Precondition Violation
 * Rule broken: A subclass cannot strengthen preconditions (cannot ask for more).
 */
class GordonRamsayPizzeria extends RegularPizzeria {
  /**
   * @param money The amount of money you pay.
   * @returns A string representing your cooked pizza.
   */
  override orderPizza(money: number): string {
  
    /** 
     * Precondition violation:
     * The parent accepts 10 bucks. 
     * This child yells at you and demands 100 bucks just to look at you.
     * A system bringing 15 bucks (trusting the Parent) will crash in tears.
     */
    if (money < 100) {
      throw new Error('Get out of my kitchen! I only accept 100 bucks or more!');
    }
    return 'Gourmet Truffle Pizza';
  }
}

/**
 * Postcondition Violation
 * Rule broken: A subclass cannot weaken postconditions (cannot deliver less/garbage).
 */
class ScamPizzeria extends RegularPizzeria {
  /**
   * @param money The amount of money you pay.
   * @returns A string representing your cooked pizza... theoretically.
   */
  override orderPizza(money: number): string {
    // Respects the parent's precondition
    if (money < 10) {
      throw new Error('Not enough money! A pizza costs 10 bucks.');
    }
    
    /**  
     * Postcondition violation:
     * The Parent promised to ALWAYS return a baked, edible pizza.
     * This child takes your money and hands you an empty box.
     */
    return null as any;
  }
}