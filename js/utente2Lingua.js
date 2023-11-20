//pesca id selettore linguaggio
const languageSelector = document.getElementById('language-selector');
//pesca id dei testi da tradurre
const translatedNome = document.getElementById('nomeLabel');
const translatedNumeroSeriale = document.getElementById('serialeLabel');
const translatedCercaProdotto = document.getElementById('cerca');
const translatedProdotti = document.getElementById('prodotti');
const translatedNomeTabella = document.getElementById('nomeTabella');
const translatedSerialeTabella = document.getElementById('serialeTabella');
const translatedAvanzamento = document.getElementById('avanzamento');
const translatedScarica = document.getElementById('download');
//definisce l'event listener
languageSelector.addEventListener('change', function () {
    
    const selectedLanguage = languageSelector.value;

    if (selectedLanguage === 'it') {
        tradottoNome = 'Nome';
        tradottoNumeroSeriale = 'Numero Seriale';
        tradottoCercaProdotto = 'Cerca';
        tradottoProdotti = 'Prodotti';
        tradottoNomeTabella = 'Nome';
        tradottoSerialeTabella = 'Numero Seriale';
        tradottoAvanzamento = 'Avanzamento';
        tradottoScarica = 'Scarica Documenti';

    } else if (selectedLanguage === 'en') {
        tradottoNome = 'Name';
        tradottoNumeroSeriale = 'Serial Number';
        tradottoCercaProdotto = 'Search ';
        tradottoProdotti = 'Item';
        tradottoNomeTabella = 'Name';
        tradottoSerialeTabella = 'Serial';
        tradottoAvanzamento = 'State';
        tradottoScarica = 'Download PDF';
    }
    translatedNome.textContent = tradottoNome;
    translatedNumeroSeriale.textContent = tradottoNumeroSeriale
    translatedCercaProdotto.textContent = tradottoCercaProdotto;
    translatedProdotti.textContent = tradottoProdotti;
    translatedNomeTabella.textContent = tradottoNomeTabella;
    translatedSerialeTabella.textContent = tradottoSerialeTabella;
    translatedAvanzamento.textContent = tradottoAvanzamento;
    translatedScarica.textContent = tradottoScarica;

});

