const recibirChiste = async()=>{
    const respuestaFetch = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es&format=txt');
    return await respuestaFetch.text();
}
export const gatoAndChiste  = async(setGato, setChiste)=>{
    setChiste(await recibirChiste());
    setGato('https://cataas.com/cat');
} 