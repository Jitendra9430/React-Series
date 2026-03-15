import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    setLoading(true);
    setError(null);

    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        } else {
          setError("Invalid response from API");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo; 