import styleItem from "./Item.module.css";

export function Item() {
  return (
    <div className={styleItem.container}>
      <img src="https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <div className={styleItem.dataItem}>
        <strong>Trufa de morango</strong>
        <p>R$ 1,23</p>
        <h6>R$ 1,21</h6>
      </div>
    </div>
  );
}
