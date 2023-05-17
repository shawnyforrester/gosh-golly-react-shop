import React, {useContext} from 'react';
//import product context
import { ProductContext } from '../contexts/product-context';
//import components
import Product from '../components/product';
//import filter




const ProductPage = () => {

    const { products } = useContext(ProductContext);
    //get only women's products
    const filteredProducts = products.filter(item => {
        return(item.category == "women's clothing" || item.category == "men's clothing");
    });

    return (
        <div>
            
            <section className='py-16'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md: grid-cols-2
        lg:grid-cols-4 x1:grid-cols-5 gap-[30px]
        max-w-sm
        mx-auto md:max-w-none md:mx-0'>

                        {filteredProducts.map(product => {                           
                            return <Product product={product} key={product.id} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;