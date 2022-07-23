export interface IProductCart {
    value:      number;
    items:      Item[];
    totalizers: Totalizer[];
}

export interface Item {
    name:         string;
    price:        number;
    sellingPrice: number;
    imageUrl:     string;
}

export interface Totalizer {
    id:    string;
    name:  string;
    value: number;
}
