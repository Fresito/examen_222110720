import React from 'react'
import { IWelcome } from '../interfaces/IReqRestApiCountries';

export const Tabla = (country: IWelcome) => {
  return (
    <>
      <div className='container'>

        <table className='table'>
            <thead>

                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Bandera</th>
                  <th scope="col">Región</th>
                  <th scope="col">Subregión</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                  <td>{country.name}</td>
                  <td>{country.flags.png}</td>
                  <td>{country.region}</td>
                  <td>{country.subregion}</td>
                </tr>
            </tbody>
        </table>

      </div>
    </>
  )
}
