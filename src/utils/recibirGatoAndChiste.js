const recibirChiste = async (categoria, filtros) => {
    const consulta = `${categoria || 'Any'}?${filtros ? `blacklistFlags=${filtros}&` : ''}`;
    const respuestaFetch = await fetch(`https://v2.jokeapi.dev/joke/${consulta}format=txt`);
    return await respuestaFetch.text();
  }
  
export const gatoAndChiste = async (setGato, setChiste, categoria, filtros) => {
    setGato(`https://cataas.com/cat?timestamp=${new Date().getTime()}`);
    fetch("https://translate.terraprint.co/translate", {
        method: "POST",
        body: JSON.stringify({
            q: await recibirChiste(categoria, filtros),
            source: "en",
            target: "es"
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(e => e.json())
    .then(({ translatedText }) => setChiste(translatedText));
} 