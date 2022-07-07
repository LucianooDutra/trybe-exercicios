import React, { useEffect } from 'react';

function BestPokemon() {

  // willUnmount
  // executará quando o componente for desmontado
  useEffect(() => {
    return () => console.log('O componente desmontou')
  }, [])

  return (
    <div>
      <img
        src="https://cf.shopee.com.br/file/28941ce29b6f4e79cefb3806737d250a"
        alt="squirtle"
        width="300"
      />
    </div>
  );
};

export default BestPokemon;