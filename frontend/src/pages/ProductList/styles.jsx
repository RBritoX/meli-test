import styled from 'styled-components';

import * as C from '~/styles/colors';

export const Main = styled.div`
   max-width: 1020px;
   margin: auto;
   padding: 0 50px;
`;

export const Container = styled.div`
   background: ${C.white};
   border-radius: 4px;
   margin-bottom: 50px;

   a {
      text-decoration: none;
      color: black;

      &:active,
      &:focus,
      &:visited {
         color: black;
      }
   }
`;

export const Product = styled.div`
   display: flex;
   padding: 16px;
   transition: all 0.2s;

   @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   &:hover {
      transform: scale(1.02);
   }

   img {
      width: 180px;
      height: 180px;
      border-radius: 4px;
   }

   div {
      display: flex;
      flex-direction: column;
      margin: 16px;
      width: 60%;

      div {
         flex-direction: row;
         padding: 0px;
         margin: 0px;

         @media (max-width: 600px) {
            justify-content: center;
            align-items: center;
            width: 100%;
         }
         span {
            font-size: 24px;
         }

         img {
            margin: 0 10px;
            width: 25px;
            height: 25px;
         }
      }
   }

   small {
      font-size: 12px;
      margin-top: 33px;
      color: ${C.grey};
   }
`;

export const Description = styled.p`
   font-size: 18px;
   max-width: 350px;
   margin-top: 16px;
`;
