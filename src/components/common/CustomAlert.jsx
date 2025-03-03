import { Box, Alert } from "@mui/material";

/**
 * Reusable alert component for displaying messages
 * @param {Object} props
 * @param {string} props.message - Alert message to display
 * @param {string} [props.severity] - Alert severity (error, warning, info, success)
 * @param {Function} props.onClose - Function to handle alert close
 * @param {Object} [props.sx] - Additional styles for the Box component
 */
const CustomAlert = ({
  message,
  severity = "warning",
  onClose,
  sx = { mt: 2 },
}) => {
  return (
    <Box sx={sx}>
      <Alert severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Box>
  );
};

export default CustomAlert;
