import React, { useState, useEffect, useMemo } from 'react';

import PropTypes from 'prop-types';

import Loading from '~/components/Loading';
import Category from '~/components/Category';
import api from '~/services/api';

import * as S from './styles';

export default function Product({ match }) {
   const [product, setProduct] = useState();
   const [isloading, setIsLoading] = useState(true);
   const [failure] = useState({ status: false, message: '' });

   useEffect(() => {
      const { id } = match.params;

      async function loadProduct() {
            const resp = await api.get(`/items/${id}`)

            const { author, item } = resp.data;
            setProduct({ author, item });

            setIsLoading(false);
      }

      loadProduct();
   }, []);

   const mainPath = useMemo(() => {
      if (product) {
         return [...product.item.path];
      }
      return ['Buscando...'];
   }, [product]);

   function renderLoading() {
      return <Loading />;
   }

   function renderPrice(value, type = '$') {
      return (
         <S.Price>
            <span>{type}</span>
            {value.toLocaleString('pt-BR')}
            <small>00</small>
         </S.Price>
      );
   }

   function renderProduct(p) {
      return (
         <>
            <S.Detail>
               <img src={p.item.picture} alt={p.item.title} />
               <section>
                  <strong>Detalhes do Produto</strong>
                  <p>{p.item.description}</p>
               </section>
            </S.Detail>
            <S.Buy>
               <small>
                  {p.item.condition} - {p.item.sold_quantity} vendidos
               </small>
               <strong>{p.item.title}</strong>
               {renderPrice(p.item.price.decimals)}
               <button type="button">Comprar</button>
            </S.Buy>
         </>
      );
   }

   return (
      <S.Main>
         <Category paths={mainPath} />
         <S.Container>
            {failure.status
               ? ''
               : isloading
               ? renderLoading()
               : renderProduct(product)}
         </S.Container>
      </S.Main>
   );
}

Product.propTypes = {
   match: PropTypes.shape({
      params: PropTypes.shape({
         id: PropTypes.string.isRequired,
      }),
   }),
};
