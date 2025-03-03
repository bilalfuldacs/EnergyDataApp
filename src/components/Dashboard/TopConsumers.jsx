import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

/**
 * TopConsumers component for displaying the top energy consumers in a table.
 * @param {Object} props - Component props.
 * @param {Array} props.topConsumers - List of top consumers.
 */
const TopConsumers = ({ topConsumers }) => {
  const columns = [
    {
      field: "name",
      headerName: "System Type",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "consumption",
      headerName: "Consumption (kWh)",
      type: "number",
      flex: 1,
      align: "right",
      headerAlign: "right",
      valueFormatter: (params) => params.value,
    },
  ];

  const rows = topConsumers.map((consumer, index) => ({
    id: index,
    ...consumer,
  }));

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25, { value: -1, label: "All" }]}
        disableRowSelectionOnClick
        disableColumnMenu
      />
    </Box>
  );
};

export default TopConsumers;
