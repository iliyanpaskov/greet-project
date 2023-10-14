export interface IPrices {
    price: string;
    regular_price: string;
    sale_price: string;
    price_range?: null;
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_decimal_separator: string;
    currency_thousand_separator: string;
    currency_prefix: string;
    currency_suffix: string;
}

export interface IImages {
    id: number;
    src: string;
    thumbnail: string;
    srcset: string;
    sizes: string;
    name: string;
    alt: string;
}

export interface ICategories {
    id: number;
    name: string;
    slug: string;
    link: string;
}

export interface IAddToCart {
    text: string;
    description: string;
    url: string;
    minimum: number;
    maximum: number;
    multiple_of: number;
}

export interface IProduct {
    id: number;
    name: string;
    slug: string;
    parent: number;
    type: string;
    variation: string;
    permalink: string;
    sku: string;
    short_description: string;
    description: string;
    on_sale: boolean;
    prices: IPrices;
    price_html: string;
    average_rating: string;
    review_count: number;
    images: IImages[];
    categories: ICategories[];
    tags?: any;
    attributes?: any;
    variations?: any;
    has_options: boolean;
    is_purchasable: boolean;
    is_in_stock: boolean;
    is_on_backorder: boolean;
    low_stock_remaining?: null;
    sold_individually: boolean;
    add_to_cart: IAddToCart;
    extensions?: any;
}

export interface IProductsData {
    products: IProduct[];
    allProducts:IProduct[];
}

export interface ICategory {
    id: number,
    name: string;
    slug?: string;
    description?: string;
    parent?: number;
    count?: number;
    image?: null;
    review_count?: number;
    permalink?: string;
}

export interface ICategoriesData {
    data: ICategory[];
    headerCategory: ICategory |any;
}

export interface ICategoryFilter {
    id: number;
    name: string;
}

export interface ISortParams {
    pageNumber:number;
    orderby?:string;
    odrer?:string;
}