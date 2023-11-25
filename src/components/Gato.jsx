import React from 'react';
import style from '../styles/image.module.css';

export default function Gato({ gato, chiste }) {
  return (
    <div className={style.contenedor}>
      <img src={gato} alt="gato" className={style.imagen} />
      <p className={style.chiste}>{chiste}</p>
    </div>
  );
}
