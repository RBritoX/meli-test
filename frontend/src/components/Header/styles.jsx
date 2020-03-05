import { darken } from 'polished';
import styled from 'styled-components';

import * as C from '~/styles/colors';

export const Container = styled.div`
   background: ${C.yellow};
   width: 100vw;
   height: 60px;

   nav {
      display: flex;
      margin: auto;
      height: 100%;
      max-width: 1020px;
      align-items: center;
      padding: 0 50px;

      a {
         display: flex;
         margin-right: 30px;
      }

      form {
         width: 100%;
         div {
            width: 100%;
            display: flex;
            align-content: center;

            input {
               width: 100%;
               padding: 8px 15px;
               border: none;
               border-radius: 5px;
               font-size: 18px;
               color: ${C.dark};
            }

            button {
               display: flex;
               position: relative;
               left: -10px;
               width: 45px;
               padding: auto;
               border: none;
               border-top-right-radius: 5px;
               border-bottom-right-radius: 5px;
               transition: background 0.2s;

               :hover {
                  background: ${darken(0.03, C.light)};
               }

               img {
                  margin: auto;
               }
            }
         }
      }
   }
`;
