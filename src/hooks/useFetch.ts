import { useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    try {
        
    } catch (error) {
        
    }
    return {data, isLoading, isError}
};

export default useFetch;
