# Energy Consumption Dashboard

A React-based dashboard application for monitoring and analyzing energy consumption patterns across different systems and energy forms. This application provides real-time visualization and analysis of energy consumption data with filtering capabilities.

![Dashboard Preview](dashboard-preview.png)

## Features

### 1. Interactive Filtering

- **Energy Form Selection**
  - Heat
  - Cold
  - Electricity
- **System Type Filtering**
  - Building systems
  - Store facilities
  - Production units
- **Date Range Selection**
  - Flexible date range picker
  - Real-time updates

### 2. Data Visualization

- **Energy Consumption Chart**
  - Interactive line chart
  - Time-based consumption trends
  - Responsive design
- **Top Consumers Grid**
  - Sortable data grid
  - Consumption rankings
  - System-wise breakdown

## Tech Stack

- **Frontend Framework**: React 19
- **UI Components**: Material-UI v5
- **Data Visualization**: Recharts
- **Data Grid**: MUI X-Data-Grid
- **Development Tools**: Create React App

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend API running on `http://127.0.0.1:8000`

## Quick Start

Installation & Setup

Clone repository
git clone https://github.com/yourusername/energy-dashboard.git
Install dependencies
cd energy-dashboard
npm install
Start development server
npm start

Open your browser and navigate to:

http://localhost:3000

Usage

1. Select Filters
   Use the Energy Form dropdown to select the type of energy (e.g., electricity, heat, cold).

Use the System Type dropdown to filter by specific systems (e.g., Building A, Store B).

Use the Date Range picker to select a start and end date.

2. View Data
   The Energy Consumption Chart will display the energy consumption trends over time based on the selected filters.

The Top Consumers Grid will show the systems with the highest energy consumption.

3. Explore Data
   Hover over the chart to view detailed consumption data for specific dates.

Use the pagination controls in the Top Consumers Grid to navigate through the data.

Key Components

1. Dashboard
   The main component that manages the state and data flow.

Displays the FilterSection, EnergyChart, and TopConsumers components.

2. FilterSection
   Handles user input for filtering data by energy form, system type, and date range.

Dynamically updates the dashboard based on selected filters.

3. EnergyChart
   Displays energy consumption trends over time using a line chart.

Built using Recharts for interactive and responsive visualizations.

4. TopConsumers
   Displays a table of the top energy consumers.

Supports sorting, pagination, and dynamic updates based on filters.

Custom Hooks and Utilities

1. useEnergyData
   Fetches energy consumption data from the backend API.

Handles loading and error states.

2. dataUtils
   Utility functions for filtering and preparing data for the chart and table.
