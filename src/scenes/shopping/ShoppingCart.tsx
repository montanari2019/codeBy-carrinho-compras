import useSWR from "swr"
import { defaultFetcher } from "../../config/fetcher";
import { IProductCart } from "../../model/IProductCart";
import {useParams} from 'react-router-dom'
import { Header } from "../../components/header/Header";

export function ShoppingCart() {
    const {selectedCard} = useParams()
    const {data, error, isValidating} = useSWR<IProductCart>(selectedCard, defaultFetcher);

    if(!!error){
        return <h1>Deu erro</h1>
    }

    if(!data || isValidating) {
        <h1>Carregando...</h1>
    }

    return (
        <div>
            <Header/>
            {JSON.stringify(data)}
        </div>
    )
}