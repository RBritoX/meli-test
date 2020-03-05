import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import shipping from '~/assets/ic_shipping@2x.png.png';
import Loading from '~/components/Loading';
import Category from '~/components/Category';
import api from '~/services/api';

import * as S from './styles';

export default function ProductList() {
   const [products, setProducts] = useState([]);
   const [isloading, setIsLoading] = useState(true);
   const [failure] = useState({ status: false, message: '' });

   const URL = new URLSearchParams(useLocation().search).get('search');

   useEffect(() => {
      setIsLoading(true);

      async function loadProduct() {
            const resp = await api.get(`/items?search=${URL}`)

            const [...searchs] = resp.data;

            setProducts(searchs);
            setIsLoading(false);
      }

      loadProduct();
   }, [URL]);

   function renderLoading() {
      return <Loading />;
   }

   function renderSearch(product, index) {
      return (
         <>
            <S.Product>
               <img src={product.picture} alt={product.id} />
               <div>
                  <div>
                     <span>
                        $ {product.price.decimals.toLocaleString('pt-BR')}
                     </span>
                     {product.free_shiping ? (
                        <img src={shipping} alt={product.id} />
                     ) : (
                        ''
                     )}
                  </div>
                  <S.Description>{product.title}</S.Description>
               </div>
               <small>{product.city}</small>
            </S.Product>
            {index === products.length - 1 ? '' : <hr />}
         </>
      );
   }

   return (
      <S.Main>
         <Category paths={['']} />
         <S.Container>
            {failure.status
               ? ''
               : isloading
               ? renderLoading()
               : products.map((product, index) => (
                    <Link key={product.id} to={`/items/${product.id}`}>
                       {renderSearch(product, index)}
                    </Link>
                 ))}
         </S.Container>
      </S.Main>
   );
}
