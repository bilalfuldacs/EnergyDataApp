import { useState, useEffect } from "react";

/**
 * Custom hook for fetching and managing energy consumption data
 * @returns {Object} Hook state and data
 * @returns {Array} data - Energy consumption data
 * @returns {boolean} loading - Loading state
 * @returns {string|null} error - Error message if any
 */
const useEnergyData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};

export default useEnergyData;
