import React from 'react'
import { Tabla } from './Tabla';
import { useCountries } from './useCountries';

export const Countries = () => {
    const { countries, next, before, inicio, fin, currentPage } = useCountries();
  return (
    <>
    <h2>Countries</h2>

        

    <div className="container">
      {
        countries.map(welcome => <div>
          <Tabla key={welcome.name} {...welcome}/></div>
        )
      }
    </div>

    <div>
          {currentPage.current === 1 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>

              <button className='btn btn-info m-2' onClick={() => next()}>Siguiente</button>

              <button className='btn btn-danger' onClick={() => fin()}>Fin</button>

            </div>
          ) : currentPage.current >= 2 && currentPage.current <= 9 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>

              <button className='btn btn-warning m-2' onClick={() => before()}>Anterior</button>

              <button className='btn btn-info' onClick={() => next()}>Siguiente</button>

              <button className='btn btn-danger m-2' onClick={() => fin()}>Fin</button>

            </div>
          ) : currentPage.current === 10 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

              <button className='btn btn-success' onClick={() => inicio()}>Inicio</button>

              <button className='btn btn-warning m-2' onClick={() => before()}>Anterior</button>

              <button className='btn btn-danger' onClick={() => fin()}>Fin</button>
              
            </div>
          ) : null}
        </div>
    
    </>
  );
}
