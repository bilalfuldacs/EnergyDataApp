/**
 * Filters energy consumption data based on selected criteria
 * @param {Array<Object>} data - Raw energy consumption data
 * @param {Object} filters - Filter configuration
 * @param {string} filters.energyForm - Type of energy (heat/cold/electricity)
 * @param {string} filters.systemType - Type of system
 * @param {Array<Date>} filters.dateRange - Start and end dates [startDate, endDate]
 * @returns {Array<Object>} Filtered data array
 */
export const filterData = (data, filters) => {
  const { energyForm, systemType, dateRange } = filters;
  return data.filter((entry) => {
    const matchesEnergyForm = entry.energyForm === energyForm;
    const matchesSystemType =
      !systemType || entry.systemType.startsWith(systemType);
    const matchesDateRange =
      new Date(entry.timestamp) >= new Date(dateRange[0]) &&
      new Date(entry.timestamp) <= new Date(dateRange[1]);
    return matchesEnergyForm && matchesSystemType && matchesDateRange;
  });
};

/**
 * Prepares data for the energy consumption chart
 * @param {Array<Object>} filteredData - Filtered energy consumption data
 * @returns {Array<Object>} Chart data with date and consumption
 */
export const prepareChartData = (filteredData) => {
  return filteredData.map((entry) => ({
    date: new Date(entry.timestamp).toLocaleDateString(),
    consumption: entry.consumption,
  }));
};

/**
 * Prepares data for the top energy consumers table
 * @param {Array<Object>} filteredData - Filtered energy consumption data
 * @param {string} selectedSystemType - Selected system type
 * @returns {Array<Object>} Top consumers data with name and consumption
 */
export const prepareTopConsumersData = (filteredData, selectedSystemType) => {
  const systemConsumption = filteredData.reduce((acc, entry) => {
    const systemGroup = selectedSystemType
      ? entry.systemType
      : entry.systemType.split(" ")[0];

    acc[systemGroup] = (acc[systemGroup] || 0) + entry.consumption;
    return acc;
  }, {});

  return Object.entries(systemConsumption)
    .map(([systemType, totalConsumption]) => ({
      name: systemType,
      consumption: totalConsumption,
    }))
    .sort((a, b) => b.consumption - a.consumption);
};
