import { createContext, useEffect, useState } from "react";


// Import all image files from the Assets directory
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../Assets', false, /\.(png|jpe?g|svg)$/));


export const ProductContext = createContext({
    allProducts: [],
    productToShow: [],
    productInCart: [],
    productInWishlist: [],
    productInPurchase: [],
    insertProductInCart: ()=>{},
    insertProductInWishlist: ()=>{},
    insertProductInPurchase: ()=>{},
    decreaseQuantity: ()=>{},
    increaseQuantity: ()=>{},
    increaseOrderQuantity: ()=>{},
    decreaseOrderQuantity: ()=>{},
    removeProductFromCart: ()=>{},
    removeProductFromWishlist: ()=>{},
    removeProductFromOrder: ()=>{},
    PURCHASE_FROM_PAGE: {},
    totalCartPrice: 0,
    totalCartItem: 0,
    orderSubtotalPrice: 0,
    orderTotalPrice: 0,
    setAllProducts: ()=>{}
})



export const ProductProvider = ({children})=>{
    const [allProducts, setAllProducts] = useState([
        {
    productId: '1',
    productName: ' Braided Jute Basket ',
    productImageURL: images['Product-1.jpg'],
    productDescription: 'Add rustic charm to your home organization with our Braided Jute Basket, perfect for storing blankets, toys, or magazines in style.',
    productPrice: '99',
    productRating: '4'
},
{
    productId: '2',
    productName: 'Bamboo toothbrush set',
    productImageURL: images['Product-2.jpg'],
    productDescription: 'Elevate your oral care routine with our Bamboo Toothbrush Set, featuring sustainable bamboo handles and soft bristles for a gentle yet effective clean.',
    productPrice: '12',
    productRating: '4'
},
{
    productId: '3',
    productName: 'Square Brown Wicker Basket on Table',
    productImageURL: images['Product-3.jpg'],
    productDescription: 'Add rustic charm to your space with our Square Brown Wicker Basket, ideal for organizing essentials or showcasing decorative items.',
    productPrice: '350',
    productRating: '4'
},
{
    productId: '4',
    productName: 'Bamboo toothbrush set',
    productImageURL: images['Product-4.jpg'],
    productDescription: 'Elevate your oral care routine with our Bamboo Toothbrush Set, featuring sustainable bamboo handles and soft bristles for a gentle yet effective clean.',
    productPrice: '19',
    productRating: '4'
},
{
    productId: '5',
    productName: 'String bag',
    productImageURL: images['Product-5.jpg'],
    productDescription: 'Upgrade your shopping experience with our String Bag, a versatile and eco-friendly solution for carrying groceries, gym essentials, and more.',
    productPrice: '29',
    productRating: '4'
},
{
    productId: '6',
    productName: 'Eco soap',
    productImageURL: images['Product-6.jpg'],
    productDescription: `Elevate your skincare routine with our ECO Soap, crafted with natural ingredients for a gentle cleanse that's kind to your skin and the planet.`,
    productPrice: '5',
    productRating: '4'
},
{
    productId: '7',
    productName: 'Set of reusable straws',
    productImageURL: images['Product-7.jpg'],
    productDescription: 'Say goodbye to single-use plastics with our Set of Reusable Straws, an eco-friendly solution for sipping in style, wherever you go.',
    productPrice: '10',
    productRating: '4'
},
{
    productId: '8',
    productName: 'Eco bag',
    productImageURL: images['Product-8.jpg'],
    productDescription: 'Embrace eco-conscious living with our Eco Bag, a sustainable and stylish companion for everyday errands and shopping trips.',
    productPrice: '35',
    productRating: '4'
},
{
    productId: '9',
    productName: 'Wooden Comb',
    productImageURL: images['Product-9.jpg'],
    productDescription: 'Glide through your hair effortlessly with our Wooden Comb, crafted for smooth, gentle styling and a touch of natural elegance.',
    productPrice: '12',
    productRating: '4'
},
{
    productId: '10',
    productName: 'Brown Pots',
    productImageURL: images['Product-10.jpg'],
    productDescription: 'Experience the art of tea-making with our elegant Brown Tea Pots, combining timeless design with functionality for a delightful brewing experience.',
    productPrice: '5',
    productRating: '4'
}
    ])
    console.log(allProducts);
    const [PURCHASE_FROM_PAGE, setPURCHASE_FROM_PAGE] = useState({
        main: 'main',
        wishlist: 'wishlist',
        cart: 'cart'
    });
    const [productToShow, setProductToShow] = useState(allProducts);
    const [productInCart, setProductInCart] = useState([]);
    const [productInWishlist, setProductInWishlist] = useState([]);
    const [productInPurchase, setProductInPurchase] = useState([]);
    const [totalCartItem, setTotalItem ] = useState(0);
    const [totalCartPrice, setTotalPrice ] = useState(0);
    const [orderSubtotalPrice, setorderSubtotalPrice ] = useState(0);
    const [orderTotalPrice, setOrderTotalPrice ] = useState(0);

    // console.log(productInPurchase);

    useEffect(()=>{
        const price = productInCart.reduce((acc,product)=> acc+= Number(product.productPrice*product.quantity),0)
        setTotalPrice(price);
    },[productInCart]);

    useEffect(()=>{
        const item = productInCart.reduce((acc,product)=> acc+= product.quantity,0)
        setTotalItem(item);
    },[productInCart]);

    useEffect(()=>{
        const price = productInPurchase.reduce((acc,product)=> acc+= Number(product.productPrice*product.quantity),0)
        setorderSubtotalPrice(price);
        setOrderTotalPrice(price+((price/100)*18));
    },[productInPurchase])

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
    const increaseOrderQuantity = (productIdToIncrease)=>{
        const newProductInOrder = productInPurchase.map((product)=> {
            if(product.productId === productIdToIncrease){
                return {...product, quantity: product.quantity+1}
            }
            return product
        });
        setProductInPurchase(newProductInOrder);
    }
    const decreaseOrderQuantity = (productIdToDecrease)=> {
        const findProductInOrder = productInPurchase.find((product)=> product.productId === productIdToDecrease);
        if(findProductInOrder.quantity === 1){
            removeProductFromOrder(productIdToDecrease);
            return;
        }
        const newProductInOrder = productInPurchase.map((product)=> {
            if(product.productId === productIdToDecrease){
                return {...product, quantity: product.quantity-1}
            }
            return product;
        });
        setProductInPurchase(newProductInOrder);
    }
    const removeProductFromOrder = (productIdToRemove)=> {
        const newProductInPurchase = productInPurchase.filter((product)=> product.productId !== productIdToRemove);
        setProductInPurchase(newProductInPurchase);
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
    const insertProductInPurchase = (product, insertRequestFrom)=>{
        if(insertRequestFrom === 'main'){
            setProductInPurchase([{...product ,quantity: 1}]);
        }else if(insertRequestFrom === 'wishlist'){
            setProductInPurchase([{...product,quantity: 1}]);
        }else{
            setProductInPurchase(product);
        }
    }

    const value = { productToShow, allProducts, setAllProducts, productToShowFromSearch, productInCart, productInWishlist, productInPurchase, insertProductInCart, decreaseQuantity, increaseQuantity, totalCartPrice, totalCartItem, orderSubtotalPrice, orderTotalPrice, removeProductFromCart, insertProductInWishlist, insertProductInPurchase, removeProductFromWishlist, PURCHASE_FROM_PAGE, decreaseOrderQuantity, increaseOrderQuantity, removeProductFromOrder};
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}