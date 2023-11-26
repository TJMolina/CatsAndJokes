import React from 'react';
import style from '../styles/image.module.css';

export default function Gato({ gato, chiste }) {
  return (
    <div className={style.contenedorImg}>
      <img src={gato} alt="gato" id='gato' className={style.imagen} />
      <p className={style.chiste}>{chiste}</p>
    </div>
  );
}
