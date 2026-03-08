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
 * Program that demonstrates an incorrect implementation of the
 * Interface Segregation Principle (ISP).
 * All military roles are forced to implement capabilities
 * they do not actually need.
 */

/**
 * Interface representing all possible military actions.
 * This interface violates ISP because it groups unrelated
 * responsibilities into a single contract.
 */
interface MilitaryPersonnel {
  /**
   * Performs patrol duties.
   * @param area - Area to patrol.
   */
  patrol(area: string): void;

  /** Reports operational status. */
  reportStatus(): void;

  /**
   * Issues military orders.
   * Not every soldier has authority to do this.
   * @param order - The order to be given.
   * @throws Error if the personnel does not have authority to give orders.
   */
  giveOrder(order: string): void;

  /**
   * Plans military missions.
   * Only commanding officers should perform this action.
   * @param missionName - The name of the mission to be planned.
   * @throws Error if the personnel does not have authority to plan missions.
   */
  planMission(missionName: string): void;
}

/**
 * Infantry soldier implementation.
 * Forced to implement methods that do not belong to its role.
 */
class Infantry implements MilitaryPersonnel {
  patrol(area: string): void {
    console.log('Infantry patrolling area: ' + area);
  }

  reportStatus(): void {
    console.log('Infantry reporting status.');
  }

  /** Incorrect forced implementation. */
  giveOrder(order: string): void {
    throw new Error('Infantry cannot give orders.');
  }

  /** Incorrect forced implementation. */
  planMission(missionName: string): void {
    throw new Error('Infantry cannot plan missions.');
  }
}

/**
 * Captain implementation.
 * This class actually needs all behaviours.
 */
class Captain implements MilitaryPersonnel {
  patrol(area: string): void {
    console.log('Captain supervising patrol in: ' + area);
  }

  reportStatus(): void {
    console.log('Captain reporting operational status.');
  }

  giveOrder(order: string): void {
    console.log('Order issued: ' + order);
  }

  planMission(missionName: string): void {
    console.log('Planning mission: ' + missionName);
  }
}

/** Usage example. */
function mainBadISPMilitary(): void {
  const personnel: MilitaryPersonnel[] = [
    new Infantry(),
    new Captain()
  ];

  personnel.forEach(militaryPerson => {
    militaryPerson.patrol('Sector 7');
    militaryPerson.reportStatus();

    try {
      militaryPerson.giveOrder('Advance to position.');
    } catch (error) {
      console.error(error.message);
    }

    try {
      militaryPerson.planMission('Operation Dawn');
    } catch (error) {
      console.error(error.message);
    }
  });
}

mainBadISPMilitary();