const recibirChiste = async () => {
    const respuestaFetch = await fetch('https://v2.jokeapi.dev/joke/Any?format=txt');
    return await respuestaFetch.text();
}
export const gatoAndChiste = async (setGato, setChiste) => {
    setGato(`https://cataas.com/cat?timestamp=${new Date().getTime()}`);
    const chiste = await recibirChiste();
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