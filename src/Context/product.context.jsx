import { createContext, useState } from "react";



export const ProductContext = createContext({
    allProducts: [],
    productsToShow: []
})

export const ProductProvider = ({children})=>{
    const [allProducts, setAllProducts] = useState([{
            productId: '1',
            productName: 'White Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a White Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '2',
            productName: 'Blue Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Blue Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '3',
            productName: 'Green Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Green Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '4',
            productName: 'Gray Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Gray Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '5',
            productName: 'T-Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a T-Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '6',
            productName: 'Slim-fit Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Slim-fit Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '7',
            productName: 'Formal Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Formal Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '8',
            productName: 'Casual Red Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Casual Red Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '9',
            productName: 'Casual Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Casual Shirt',
            productPrice: '350',
            productRating: '4'
        },
        {
            productId: '10',
            productName: 'Party Shirt',
            productImageURL: 'https://images.pexels.com/photos/3850468/pexels-photo-3850468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            productDescription: 'It is a Party Shirt',
            productPrice: '350',
            productRating: '4'
        }
    ])
    const [productToShow, setProductToShow] = useState(allProducts);

    const productToShowFromSearch = (searchVal)=>{
        if(searchVal === '') return;
        const newProductToShow = allProducts.filter((product)=> product.productName.toLowerCase().includes(searchVal))
        setProductToShow(newProductToShow);
    }
    const value = { productToShow, allProducts, setAllProducts, productToShowFromSearch};
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}