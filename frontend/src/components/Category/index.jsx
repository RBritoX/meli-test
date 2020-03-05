import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import PropTypes from 'prop-types';

import * as S from './styles';

export default function Category({ paths }) {
   const pathLink = paths.map((path, index) => (
      <span key={path}>
         <a href="/">{path}</a>
         {index === paths.length - 1 ? '' : <FaChevronRight />}
      </span>
   ));

   return <S.Container>{pathLink}</S.Container>;
}

Category.propTypes = {
   paths: PropTypes.instanceOf(Array),
};

Category.defaultProps = {
   paths: [''],
};
