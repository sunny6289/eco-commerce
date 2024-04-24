import { createContext, useEffect, useState } from "react";



export const ProductContext = createContext({
    allProducts: [],
    productToShow: [],
    productInCart: [],
    productInWishlist: [],
    insertProductInCart: ()=>{},
    insertProductInWishlist: ()=>{},
    decreaseQuantity: ()=>{},
    increaseQuantity: ()=>{},
    removeProductFromCart: ()=>{},
    removeProductFromWishlist: ()=>{},
    totalPrice: 0,
    totalItem: 0,
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
    const [productInCart, setProductInCart] = useState([]);
    const [productInWishlist, setProductInWishlist] = useState([]);
    const [totalItem, setTotalItem ] = useState(0);
    const [totalPrice, setTotalPrice ] = useState(0);

    useEffect(()=>{
        const price = productInCart.reduce((acc,product)=> acc+= Number(product.productPrice*product.quantity),0)
        setTotalPrice(price);
    },[productInCart]);

    useEffect(()=>{
        const item = productInCart.reduce((acc,product)=> acc+= product.quantity,0)
        setTotalItem(item);
    },[productInCart]);

    const insertProductInCart = (productToAdd)=>{
        // Will be used to add product in Cart
        const doesExist = productInCart.find((product)=> product.productId === productToAdd.productId);
        if(doesExist){
            alert("Product is already in cart");
            return;
        }
        setProductInCart([...productInCart,{...productToAdd, quantity: 1}]);
    }

    const productToShowFromSearch = (searchVal)=>{
        if(searchVal === ''){
            setProductToShow(allProducts);
            return;
        }  
        const newProductToShow = allProducts.filter((product)=> product.productName.toLowerCase().includes(searchVal))
        setProductToShow(newProductToShow);
    }

    const decreaseQuantity = (productIdToDecrease)=>{
        const findProductInCart = productInCart.find((product)=> product.productId === productIdToDecrease);
        if(findProductInCart.quantity === 1){
            removeProductFromCart(productIdToDecrease);
            return;
        }
        const newProductInCart = productInCart.map((product)=> {
            if(product.productId === productIdToDecrease){
                return {...product, quantity: product.quantity-1}
            }
            return product;
        });
        setProductInCart(newProductInCart);    
    }

    const increaseQuantity = (productIdToIncrease) =>{
        const newProductInCart = productInCart.map((product)=> {
            if(product.productId === productIdToIncrease){
                return {...product, quantity: product.quantity+1}
            }
            return product
        });
        setProductInCart(newProductInCart);
    }
    const removeProductFromCart = (productIdToRemove)=>{
        const newProductInCart = productInCart.filter((product)=> product.productId !== productIdToRemove);
        setProductInCart(newProductInCart);
    }
    const insertProductInWishlist = (productToAdd)=>{
        const doesExist = productInWishlist.find((product)=> product.productId === productToAdd.productId);
        if(doesExist){
            alert("Product is already in Wishlist");
            return;
        }
        setProductInWishlist([...productInWishlist,{...productToAdd}]);
    }
    const removeProductFromWishlist = (productIdToRemove)=>{
        const newProductInWishlist = productInWishlist.filter((product)=> product.productId !== productIdToRemove);
        setProductInWishlist(newProductInWishlist);
    }


    const value = { productToShow, allProducts, setAllProducts, productToShowFromSearch, productInCart, productInWishlist, insertProductInCart, decreaseQuantity, increaseQuantity, totalPrice, totalItem, removeProductFromCart, insertProductInWishlist, removeProductFromWishlist};
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}