/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * 
 * @author Álvaro Pérez Ramos
 * @author Pablo García de los Reyes
 * @author Adrián Hernández Herrera
 * @since 26 FEB 2026
 *
 * Program to represent different military roles following
 * the Interface Segregation Principle (ISP).
 */

/**
 * Interface representing basic military personnel.
 */
interface Soldier {
  /**
   * Performs a patrol action.
   * 
   * @param area - Area to patrol.
   */
  patrol(area: string): void;

  /**
   * Reports current status.
   */
  reportStatus(): void;
}

/**
 * Interface representing commanding officers.
 * Officers can perform all soldier actions plus command tasks.
 */
interface Officer extends Soldier {
  /**
   * Issues an order to a unit.
   * 
   * @param order - Command to execute.
   */
  giveOrder(order: string): void;

  /**
   * Plans a military mission.
   * 
   * @param missionName - Name of the mission.
   */
  planMission(missionName: string): void;
}

/**
 * Infantry class implementing basic soldier behaviour.
 */
class Infantry implements Soldier {
  /**
   * Patrol implementation.
   */
  patrol(area: string): void {
    console.log('Patrolling area: ' + area);
  }

  /**
   * Reports soldier status.
   */
  reportStatus(): void {
    console.log('Infantry reporting status.');
  }
}

/**
 * Captain class implementing officer behaviour.
 * Includes both soldier and command responsibilities.
 */
class Captain implements Officer {
  /**
   * Patrol implementation.
   */
  patrol(area: string): void {
    console.log('Captain supervising patrol in: ' + area);
  }

  /**
   * Reports officer status.
   */
  reportStatus(): void {
    console.log('Captain reporting operational status.');
  }

  /**
   * Issues an order.
   */
  giveOrder(order: string): void {
    console.log('Order issued: ' + order);
  }

  /**
   * Plans a mission.
   */
  planMission(missionName: string): void {
    console.log('Planning mission: ' + missionName);
  }
}

/**
 * Usage example.
 */
function mainMilitaryRoles(): void {
  const soldier: Soldier = new Infantry();
  const officer: Officer = new Captain();

  soldier.patrol('Sector A');
  soldier.reportStatus();

  officer.patrol('Sector B');
  officer.giveOrder('Advance');
  officer.planMission('Operation Dawn');
}

mainMilitaryRoles();