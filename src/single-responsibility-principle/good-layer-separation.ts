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
 * Program that demonstrates a correct usage of the Single Responsibility Principle (SRP)
 * by separating statistical calculations from presentation logic.
 */

/**
 * Performs statistical calculations.
 */
class StatisticsCalculator {
  /**
   * Calculates the mean.
   * 
   * @param values - An array of numeric values for which to calculate the mean.
   * @returns - The mean value of the dataset.
   */
  calculateMean(values: number[]): number {
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  /**
   * Calculates the median.
   * 
   * @param values - An array of numeric values for which to calculate the median.
   * @returns - The median value of the dataset. If the dataset has an even number of values, it returns the average of the two middle values.
   */
  calculateMedian(values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  /**
   * Calculates the mode.
   * 
   * @param values - An array of numeric values for which to calculate the mode.
   * @returns - The mode value of the dataset. If there are multiple modes, it returns the first one found.
   */
  calculateMode(values: number[]): number {
    const frequency: Record<number, number> = {};
    values.forEach(value => {
      frequency[value] = (frequency[value] ?? 0) + 1;
    });

    let mode = values[0];
    let maxCount = 0;

    for (const key in frequency) {
      if (frequency[key] > maxCount) {
        maxCount = frequency[key];
        mode = Number(key);
      }
    }

    return mode;
  }

  /**
   * Calculates the maximum value.
   * 
   * @param values - An array of numeric values for which to calculate the maximum.
   * @returns - The maximum value in the dataset.
   */
  calculateMax(values: number[]): number {
    return Math.max(...values);
  }

  /**
   * Calculates the minimum value.
   * 
   * @param values - An array of numeric values for which to calculate the minimum.
   * @returns - The minimum value in the dataset.
   */
  calculateMin(values: number[]): number {
    return Math.min(...values);
  }

  /**
   * Calculates the standard deviation.
   * 
   * @param values - An array of numeric values for which to calculate the standard deviation.
   * @returns - The standard deviation of the dataset, which measures the amount of variation or dispersion of the values.
   */
  calculateStandardDeviation(values: number[]): number {
    const mean = this.calculateMean(values);
    const variance =
      values.reduce((sum, value) =>
        sum + Math.pow(value - mean, 2), 0) / values.length;
    return Math.sqrt(variance);
  }
}

/**
 * Handles presentation of statistical results.
 */
class StatisticsView {
  /**
   * Displays all statistical results.
   * 
   * @param results - An object containing all the calculated statistical values (mean, median, mode, max, min, standard deviation) to be displayed.
   * This method is responsible for presenting the results in a clear and organized manner, separating the presentation logic from the calculation logic.
   */
  displayResults(results: { statisticComputed: string, statisticCalculator: number}): void {
    console.log(`${results.statisticComputed}: ${results.statisticCalculator}`);
  }
}

/**
 * Application entry point.
 */
function mainGoodLayerImplementation(): void {
  const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
  const calculator = new StatisticsCalculator();
  const view = new StatisticsView();

  const results = [
    { statisticComputed: 'Mean', statisticCalculator: calculator.calculateMean(data) },
    { statisticComputed: 'Median', statisticCalculator: calculator.calculateMedian(data) },
    { statisticComputed: 'Mode', statisticCalculator: calculator.calculateMode(data) },
    { statisticComputed: 'Max', statisticCalculator: calculator.calculateMax(data) },
    { statisticComputed: 'Min', statisticCalculator: calculator.calculateMin(data) },
    { statisticComputed: 'Standard Deviation', statisticCalculator: calculator.calculateStandardDeviation(data) }
  ];

  results.forEach(result => view.displayResults(result));
}

mainGoodLayerImplementation();