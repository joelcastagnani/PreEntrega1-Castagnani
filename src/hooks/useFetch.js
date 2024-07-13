import { useEffect, useState } from "react";

export const useFetch = ( endpoint , valorInicial ) => {
    const [ data, setData ] = useState([]);
    useEffect(() => {
        let getData = fetch(endpoint);
        getData.then((res) => res.json()).then((res) => setData(res));
      }, []);

    
    return data;
}