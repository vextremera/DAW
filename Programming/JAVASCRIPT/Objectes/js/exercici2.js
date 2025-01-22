const articles = [
    { codi: '001', descripcio: 'PC GAMER', preu: 1.20 },
    { codi: '002', descripcio: 'TV PLASMA', preu: 0.80 },
    { codi: '003', descripcio: 'ARMARI GRIS', preu: 0.90 },
    { codi: '004', descripcio: 'ÑAMI', preu: 1.50 },
    { codi: '005', descripcio: 'PAN', preu: 1.00 }
];

let cistella = [];

function mostrarArticles() {
    const articlesList = document.getElementById("articlesList");
    articlesList.innerHTML = '';
    articles.forEach(article => {
        articlesList.innerHTML += `<div class="article">
            <span>${article.codi} - ${article.descripcio}</span>
            <span>${article.preu}€</span>
        </div>`;
    });
}

function afegirCistella() {
    const codi = document.getElementById("codi").value.trim();
    const article = articles.find(a => a.codi === codi);
    if (article) {
        cistella.push(article);
        mostrarCistella();
        document.getElementById("codi").value = '';
    } else {
        alert("El codi introduït no existeix");
    }
}

function eliminarDeCistella() {
    const codi = document.getElementById("codi").value.trim();
    const index = cistella.findIndex(a => a.codi === codi);
    if (index > -1) {
        cistella.splice(index, 1);
        mostrarCistella();
        document.getElementById("codi").value = '';
    } else {
        alert("El codi no es troba en la cistella");
    }
}

function mostrarCistella() {
    const cistellaList = document.getElementById("cistellaList");
    const totalEl = document.getElementById("total");
    cistellaList.innerHTML = '';
    let total = 0;
    cistella.forEach(article => {
        cistellaList.innerHTML += `<div class="cistella">
            <span>${article.codi} - ${article.descripcio}</span>
            <span>${article.preu}€</span>
        </div>`;
        total += article.preu;
    });
    totalEl.textContent = `Total: ${total.toFixed(2)}€`;
}

function finalitzarCompra() {
    if (cistella.length > 0) {
        mostrarCistella();
        alert("Compra finalitzada!");
        cistella = [];
        mostrarCistella();
    } else {
        alert("La cistella està buida");
    }
}

mostrarArticles();