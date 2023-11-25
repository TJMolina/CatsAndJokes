import { useEffect, useState } from "react";
import Gato from "../components/Gato";
import { gatoAndChiste } from "../utils/gatos";
export default function Inicio() {
  const [gato, setGato] = useState();
  const [chiste, setChiste] = useState(null);
  
  useEffect(()=>{
    gatoAndChiste(setGato, setChiste);
  },[]);
  
  return (
    <Gato gato={gato} chiste={chiste} />
  )
}
