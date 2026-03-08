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
 * Program to represent a bad usage of the SRP. This is an example of a bad
 * class implementation. There are two obvious groups of methods that interact
 * with each property.
 */

/**
 * Manages inventory, reporting, alerts, and persistence.
 * This class intentionally violates the Single Responsibility Principle.
 */
class InventoryManager {
  constructor(private items: { name: string; quantity: number }[] = []) {}

  /**
   * Adds a new item to inventory.
   *
   * @param name - The name of the item.
   * @param quantity - The quantity of the item to add.
   */
  addItem(name: string, quantity: number): void {
    this.items.push({ name, quantity });
    this.saveToDisk();
    this.logLowStock(name);
  }

  /**
   * Updates stock quantity for a specific item.
   *
   * @param name - The name of the item.
   * @param quantity - The new quantity of the item.
   */
  updateQuantity(name: string, quantity: number): void {
    const item = this.items.find(i => i.name === name);
    if (item) {
      item.quantity = quantity;
      this.saveToDisk();
      this.logLowStock(name);
    }
  }

  /**
   * Generates a textual inventory report.
   *
   * @returns - A string representation of the inventory.
   */
  generateReport(): string {
    return this.items
      .map(item => `${item.name}: ${item.quantity}`)
      .join('\n');
  }

  /**
   * Persists inventory data to disk.
   */
  private saveToDisk(): void {
    console.log('Saving inventory to disk...');
  }

  /**
   * Logs a warning if stock is low for a specific item.
   *
   * @param name - The name of the item to check.
   */
  private logLowStock(name: string): void {
    const item = this.items.find(i => i.name === name);
    if (item && item.quantity < 5) {
      console.warn(`Low stock warning for ${name}`);
    }
  }
}

/**
 * Usage example
 */
function mainBadClassSeparator() {
  const inventory = new InventoryManager();
  inventory.addItem('Widget', 10);
  inventory.addItem('Gadget', 3);
  console.log(inventory.generateReport());
}