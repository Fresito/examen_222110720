import { useEffect, useRef, useState } from 'react'
import { ReqRestApi } from '../api/ReqRestApi';
import { IReqRestApiCountries, IWelcome } from '../interfaces/IReqRestApiCountries';

export const useCountries = () => {

    const DEFAULT_PAGE = 1;
    const [countries, setWelcome] = useState<IWelcome[]>([]);
    const currentPage = useRef(DEFAULT_PAGE);
    
    const getData = async () =>{
        const response = await ReqRestApi.get<IReqRestApiCountries>(
            '/country', { params: { page: currentPage.current } }).then(
            ({data}) => data
        ).catch(console.log);
        
        response ? setWelcome(response.results) : setWelcome([]);
    }
    
    useEffect(() => { getData(); }, []);

    const next = () => {
        currentPage.current++;
        getData();
    }
    
    const before = () => {
        currentPage.current--;
        getData();
    }

    const inicio = () => {
        currentPage.current = (1);
        getData();
    }

    const fin = () => {
        currentPage.current = (10);
        getData();
    }

    return {countries, next, before, inicio, fin, currentPage};
}
