const recibirChiste = async (categoria, filtros) => {
    let consulta = categoria?`${categoria}?`:'Any?';
    consulta += filtros? `blacklistFlags=${filtros}&`:'';
    const respuestaFetch = await fetch(`https://v2.jokeapi.dev/joke/${consulta}format=txt`);
    return await respuestaFetch.text();
}
export const gatoAndChiste = async (setGato, setChiste, categoria, filtros) => {
    setGato(`https://cataas.com/cat?timestamp=${new Date().getTime()}`);
    const chiste = await recibirChiste(categoria, filtros);
    setChiste(chiste);
    return;
    const res = await fetch("https://translate.terraprint.co/translate", {
        method: "POST",
        body: JSON.stringify({
            q: chiste,
            source: "en",
            target: "es"
        }),
        headers: { "Content-Type": "application/json" }
    });
    const {translatedText} = await res.json()
    setChiste(translatedText);
} 