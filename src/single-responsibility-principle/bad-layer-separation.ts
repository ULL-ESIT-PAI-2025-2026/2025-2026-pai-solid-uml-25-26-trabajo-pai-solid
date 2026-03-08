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
 * Program that demonstrates an incorrect usage of the Single Responsibility Principle (SRP)
 * at the architectural level. Statistical calculations and presentation logic are mixed
 * within the same class.
 */

/**
 * Handles statistical calculations and output presentation.
 * This class intentionally violates the SRP.
 */
class StatisticsProcessor {
  constructor(private data: number[] = []) { }

  /**
   * Loads the dataset.
   *
   * @param values - Numeric values to process.
   */
  loadData(values: number[]): void {
    this.data = values;
  }

  /**
   * Calculates the mean of the dataset.
   */
  calculateMean(): void {
    const mean =
      this.data.reduce((a, b) => a + b, 0) / this.data.length;
    console.log(`Mean: ${mean}`);
  }

  /**
   * Calculates the median of the dataset.
   */
  calculateMedian(): void {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
    console.log(`Median: ${median}`);
  }

  /**
   * Calculates the mode of the dataset.
   */
  calculateMode(): void {
    const frequency: Record<number, number> = {};
    this.data.forEach(value => {
      frequency[value] = (frequency[value] ?? 0) + 1;
    });

    let mode = this.data[0];
    let maxCount = 0;

    for (const key in frequency) {
      if (frequency[key] > maxCount) {
        maxCount = frequency[key];
        mode = Number(key);
      }
    }

    console.log(`Mode: ${mode}`);
  }

  /**
   * Calculates the maximum value.
   */
  calculateMax(): void {
    console.log(`Max: ${Math.max(...this.data)}`);
  }

  /**
   * Calculates the minimum value.
   */
  calculateMin(): void {
    console.log(`Min: ${Math.min(...this.data)}`);
  }

  /**
   * Calculates the standard deviation.
   */
  calculateStandardDeviation(): void {
    const mean =
      this.data.reduce((a, b) => a + b, 0) / this.data.length;
    const variance =
      this.data.reduce((sum, value) =>
        sum + Math.pow(value - mean, 2), 0) / this.data.length;

    console.log(`Standard Deviation: ${Math.sqrt(variance)}`);
  }
}

/**
 * Usage example.
 */
function mainBadLayerImplementation(): void {
  const processor = new StatisticsProcessor();
  processor.loadData([1, 2, 2, 3, 4, 5, 5, 5, 6]);

  processor.calculateMean();
  processor.calculateMedian();
  processor.calculateMode();
  processor.calculateMax();
  processor.calculateMin();
  processor.calculateStandardDeviation();
}

mainBadLayerImplementation();