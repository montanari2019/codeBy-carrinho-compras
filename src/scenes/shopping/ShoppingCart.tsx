import useSWR from "swr";
import styleShoppingCart from "./ShoppingCart.module.css";

import { defaultFetcher } from "../../config/fetcher";
import { IProductCart } from "../../model/IProductCart";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Item } from "../../components/item/Item";
import { Badge } from "../../components/badge/Badge";

export function ShoppingCart() {
  const { selectedCard } = useParams();
  const { data, error, isValidating } = useSWR<IProductCart>(
    selectedCard,
    defaultFetcher
  );

  if (!!error) {
    return <h1>Deu erro</h1>;
  }

  if (!data || isValidating) {
    <h1>Carregando...</h1>;
  }

  return (
    <div>
      <Header />
      <div className={styleShoppingCart.container}>
        <strong>Meu carrinho</strong>
        <div>
          <div className={styleShoppingCart.flexContainerListItem}>
            <Item />
            <Item />
            <Item />
          </div>
          <div className={styleShoppingCart.totalizers}>
            <div className={styleShoppingCart.totalizersItem}>
              <strong>Total</strong>
              <strong>R$ 9,50</strong>
            </div>
            { selectedCard === "acima-10" ? <Badge/> : <br/>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
