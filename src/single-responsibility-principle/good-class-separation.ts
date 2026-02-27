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
 * Program to represent a right usage of the SRP. 
 * This is an example of a good class implementation. 
 * Each class has a single responsibility, and the methods are grouped according to that responsibility.
 */

/**
 * Stores and updates inventory data.
 */
class InventoryStore {
  private items: { name: string; quantity: number }[] = [];

  /**
   * Adds a new item to inventory.
   * 
   * @param name - The name of the item.
   * @param quantity - The quantity of the item to add.
   */
  addItem(name: string, quantity: number): void {
    this.items.push({ name, quantity });
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
    }
  }

  /**
   * Retrieves the current inventory items.
   * 
   * @returns - An array of inventory items with their names and quantities. 
   */
  getItems(): { name: string; quantity: number }[] {
    return [...this.items];
  }
}

/**
 * Generates inventory reports.
 */
class InventoryReporter {
  /**
   * Generates a textual inventory report.
   * 
   * @param items - An array of inventory items with their names and quantities.
   * @returns - A string representation of the inventory report.
   */
  generate(items: { name: string; quantity: number }[]): string {
    return items.map(i => `${i.name}: ${i.quantity}`).join('\n');
  }
}

/**
 * Handles inventory alerts.
 */
class InventoryAlertService {
  /**
   * Checks inventory items and logs a warning if stock is low.
   * 
   * @param items - An array of inventory items with their names and quantities.
   */
  check(items: { name: string; quantity: number }[]): void {
    items.forEach(item => {
      if (item.quantity < 5) {
        console.warn(`Low stock warning for ${item.name}`);
      }
    });
  }
}

/**
 * Usage example
 */
function mainGoodClassSeparation() {
  const store = new InventoryStore();
  const reporter = new InventoryReporter();
  const alertService = new InventoryAlertService();

  store.addItem('Widget', 10);
  store.addItem('Gadget', 3);

  const items = store.getItems();
  console.log(reporter.generate(items));
  alertService.check(items);
}

mainGoodClassSeparation();