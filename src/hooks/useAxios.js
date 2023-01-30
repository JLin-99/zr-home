const { useEffect, useState } = require("react");

const useAxios = (configObj) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });
      console.log(res);
      setResponse(res.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [response, loading, axiosFetch];
};

export default useAxios;
