/**
 * Lagrange Interpolation Method for temperature prediction
 */

// Function to calculate the Lagrange basis polynomial
export const lagrangeBasisPolynomial = (
  x: number[],
  j: number,
  xi: number
): number => {
  let result = 1;
  
  for (let i = 0; i < x.length; i++) {
    if (i !== j) {
      result *= (xi - x[i]) / (x[j] - x[i]);
    }
  }
  
  return result;
};

// Function to calculate the Lagrange interpolation
export const lagrangeInterpolation = (
  x: number[],
  y: number[],
  xi: number
): number => {
  if (x.length !== y.length) {
    throw new Error('Input arrays must have the same length');
  }
  
  let result = 0;
  
  for (let i = 0; i < x.length; i++) {
    result += y[i] * lagrangeBasisPolynomial(x, i, xi);
  }
  
  return result;
};

// Function to predict temperature for future hours
export const predictTemperature = (
  hours: number[],
  temperatures: number[],
  targetHour: number
): number => {
  return lagrangeInterpolation(hours, temperatures, targetHour);
};

// Function to format the data for prediction
export const formatDataForPrediction = (weatherData: any) => {
  if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday[0]) {
    return { hours: [], temperatures: [] };
  }
  
  const hourlyData = weatherData.forecast.forecastday[0].hour;
  
  const hours = hourlyData.map((_: any, index: number) => index);
  const temperatures = hourlyData.map((hour: any) => hour.temp_c);
  
  return { hours, temperatures };
};

// Function to get predicted temperatures for the next 24 hours
export const getPredictedTemperatures = (weatherData: any) => {
  const { hours, temperatures } = formatDataForPrediction(weatherData);
  
  if (hours.length === 0 || temperatures.length === 0) {
    return [];
  }
  
  // Get predictions for each hour
  const predictions = [];
  
  for (let hour = 0; hour < 24; hour++) {
    const predictedTemp = predictTemperature(hours, temperatures, hour);
    predictions.push({
      hour,
      temperature: parseFloat(predictedTemp.toFixed(1)),
    });
  }
  
  return predictions;
};