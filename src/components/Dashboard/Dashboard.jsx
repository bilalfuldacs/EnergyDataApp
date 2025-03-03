import { Box, Container, Paper, Typography } from "@mui/material";
import FilterSection from "./FilterSection";
import EnergyChart from "./EnergyChart";
import TopConsumers from "./TopConsumers";
import CustomAlert from "../common/CustomAlert";
import { useState } from "react";
import {
  filterData,
  prepareChartData,
  prepareTopConsumersData,
} from "../../utils/dataUtils";
import useEnergyData from "../../hooks/useEnergyData";

/**
 * Main Dashboard component for displaying energy consumption data.
 * Handles filtering, data fetching, and rendering of charts and tables.
 */
const Dashboard = ({ apiUrl = "http://127.0.0.1:8000/api/energy-data/" }) => {
  const { data, loading, error } = useEnergyData(apiUrl);
  const [filters, setFilters] = useState({
    energyForm: "",
    dateRange: [null, null],
    systemType: "",
  });
  const [noDataAlert, setNoDataAlert] = useState(false);

  // Handle filter changes with data validation
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    if (
      newFilters.energyForm &&
      newFilters.dateRange[0] &&
      newFilters.dateRange[1]
    ) {
      const filteredResults = filterData(data, newFilters);
      if (filteredResults.length === 0) {
        setNoDataAlert(true);
      } else {
        setNoDataAlert(false);
      }
    }
  };

  // Display loading state
  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  // Display error state
  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography color="error">Error: {error.message}</Typography>
      </Container>
    );
  }

  // Check if filters are valid
  const areFiltersValid =
    filters.energyForm && filters.dateRange[0] && filters.dateRange[1];

  // Filter and prepare data based on user selections
  const filteredData = areFiltersValid ? filterData(data, filters) : [];
  const chartData = areFiltersValid ? prepareChartData(filteredData) : [];
  const topConsumers = areFiltersValid
    ? prepareTopConsumersData(filteredData, filters.systemType)
    : [];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Energy Consumption Dashboard
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <DashboardSection>
          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          {noDataAlert && (
            <CustomAlert
              message="No data found for the selected filters. Please try a different combination."
              severity="warning"
              onClose={() => setNoDataAlert(false)}
            />
          )}
        </DashboardSection>

        {areFiltersValid && !noDataAlert ? (
          <>
            <DashboardSection title="Energy Consumption Over Time">
              <EnergyChart data={chartData} />
            </DashboardSection>

            <DashboardSection title="Top Energy Consumers">
              <TopConsumers topConsumers={topConsumers} />
            </DashboardSection>
          </>
        ) : (
          <DashboardSection>
            <Typography variant="h6">
              {noDataAlert
                ? "Please adjust your filters to see available data."
                : "Please select energy form and date range to view data."}
            </Typography>
          </DashboardSection>
        )}
      </Box>
    </Container>
  );
};

/**
 * Reusable DashboardSection component for wrapping sections with a Paper component.
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - Child components.
 * @param {string} [props.title] - Optional title for the section.
 */
const DashboardSection = ({ children, title }) => (
  <Paper elevation={3} sx={{ p: 3 }}>
    {title && (
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
    )}
    {children}
  </Paper>
);

export default Dashboard;
