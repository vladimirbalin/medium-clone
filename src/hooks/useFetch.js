import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endPoint) => {
  const [response, setResponse] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = (formData) => {
    setIsFetching(true);
    setOptions(formData);
  }

  useEffect(() => {
    if (!isFetching) {
      return
    }
    axios(`https://conduit.productionready.io/api/${endPoint}`, options)
      .then(res => {
        console.log('resolve', res);
        setResponse(res.data);
        setIsFetching(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.response.data);
        setIsFetching(false);
      });
  }, [isFetching])


  return [
    {
      response,
      isFetching,
      error
    },
    doFetch
  ]

}