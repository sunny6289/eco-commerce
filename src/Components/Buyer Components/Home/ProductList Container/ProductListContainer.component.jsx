import { useContext } from "react";
import { ProductContext } from "../../../../Context/product.context";
import ProductListComponent from "../../Main/ProductList/ProductList.component";


const ProductListContainerComponent = () => {
    const { productToShow } = useContext(ProductContext)
    return (
        <>
            {   productToShow.length ? 
                productToShow.map((product)=> <ProductListComponent key={product.productId} product={product}/>)
                : <h1 style={{
                    textAlign: 'center',
                    fontSize: '50px',
                    fontWeight: '700'
                }}>There is no such product!</h1>
            }
        </>
    );
}

export default ProductListContainerComponent;
