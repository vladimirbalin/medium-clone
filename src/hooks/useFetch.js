import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endPoint) => {
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [postObject, setPostObject] = useState(null)

  const doFetch = (postObject) => {
    setIsLoading(true);
    setPostObject(postObject);
  }

  useEffect(() => {
    if (!isLoading) {
      return
    }
    axios.post(`https://conduit.productionready.io/api/${endPoint}`, postObject)
      .then(res => {
        console.log('resolve', res);
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.response.data);
        setIsLoading(false);
      });
  }, [isLoading])


  return [
    {
      response,
      isLoading,
      error
    },
    doFetch
  ]

}