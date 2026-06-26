// ============================================================
//  CONFIGURACIÓN GLOBAL
// ============================================================
const CONFIG_WHATSAPP = "522225364045";

// ============================================================
//  BASE DE DATOS (36 modelos)
// ============================================================
const SNEAKERS_DATA = [
    { id: "MNK-001", marca: "Vans", nombre: "Upland", precio: "$1,500" },
    { id: "MNK-002", marca: "Nike", nombre: "Classic Cortez Leather", precio: "$1,600" },
    { id: "MNK-003", marca: "Jordan", nombre: "6 Rings", precio: "$2,000" },
    { id: "MNK-004", marca: "Jordan", nombre: "1 Mid Space Jam", precio: "$2,200" },
    { id: "MNK-005", marca: "Salvatore Ferragamo", nombre: "Blancos Suela Roja", precio: "$3,500" },
    { id: "MNK-006", marca: "Christian Louboutin", nombre: "Louis Junior Spikes Suela Roja", precio: "$2,900" },
    { id: "MNK-007", marca: "Nike", nombre: "Hyperdunk X", precio: "$1,800" },
    { id: "MNK-008", marca: "Nike", nombre: "Mind 001", precio: "$1,700" },
    { id: "MNK-009", marca: "New Balance", nombre: "9060", precio: "$1,800" },
    { id: "MNK-010", marca: "Nike", nombre: "Mind 001 Slide", precio: "$900" },
    { id: "MNK-011", marca: "Dolce & Gabbana", nombre: "Portofino Negro", precio: "$2,500" },
    { id: "MNK-012", marca: "Puma", nombre: "Park Lifestyle", precio: "$1,400" },
    { id: "MNK-013", marca: "Nike", nombre: "AF1 Blancos", precio: "$1,500" },
    { id: "MNK-014", marca: "Adidas", nombre: "Superstar", precio: "$1,300" },
    { id: "MNK-015", marca: "Nike", nombre: "SB Dunk Low Pro Parra", precio: "$2,800" },
    { id: "MNK-016", marca: "Nike", nombre: "Air Max 97 Jesus Shoes", precio: "$3,200" },
    { id: "MNK-017", marca: "Louis Vuitton", nombre: "LV Trainer Blanco y Negro", precio: "$3,800" },
    { id: "MNK-018", marca: "Dolce & Gabbana", nombre: "Portofino Blanco", precio: "$2,500" },
    { id: "MNK-019", marca: "New Balance", nombre: "9060 Blanco/Plata", precio: "$1,800" },
    { id: "MNK-020", marca: "Nike", nombre: "Air Max 97 Negro/Azul/Blanco", precio: "$2,000" },
    { id: "MNK-021", marca: "Nike", nombre: "Air Force 1 Low Rojo Intenso", precio: "$1,600" },
    { id: "MNK-022", marca: "Nike", nombre: "SB Dunk Low Huf Smiled", precio: "$2,600" },
    { id: "MNK-023", marca: "Timberland", nombre: "Greenstride Motion 6 Negro", precio: "$1,700" },
    { id: "MNK-024", marca: "Nike", nombre: "Total 90 3 SP Negro/Blanco", precio: "$2,400" },
    { id: "MNK-025", marca: "Nike", nombre: "Total 90 III Blanco/Dorado", precio: "$2,400" },
    { id: "MNK-026", marca: "Nike", nombre: "Air Max 720 Blanco/Negro Orca", precio: "$2,100" },
    { id: "MNK-027", marca: "Louis Vuitton", nombre: "LV Trainer Blanco", precio: "$3,800" },
    { id: "MNK-028", marca: "Alexander McQueen", nombre: "Graffiti Negro", precio: "$3,200" },
    { id: "MNK-029", marca: "Alexander McQueen", nombre: "Oversized", precio: "$3,000" },
    { id: "MNK-030", marca: "Alexander McQueen", nombre: "Oversized Black Crystal Glitter", precio: "$3,500" },
    { id: "MNK-031", marca: "Nike", nombre: "Air More Uptempo Low Blanco/Azul Hyper Royal", precio: "$2,200" },
    { id: "MNK-032", marca: "Nike", nombre: "Air Jordan 6 Retro SP Travis Scott Cactus Jack", precio: "$3,500" },
    { id: "MNK-033", marca: "Adidas", nombre: "Superstar Disneys Dumbo", precio: "$1,800" },
    { id: "MNK-034", marca: "Nike SB", nombre: "Dunk Low Jarritos", precio: "$1,550" },
    { id: "MNK-035", marca: "Adidas", nombre: "NMD_R1 V2 Blanco/Naranja", precio: "$1,600" },
    { id: "MNK-036", marca: "Louis Vuitton", nombre: "LV Trainer Monograma Azul/Blanco", precio: "$3,900" },
    { id: "MNK-037", marca: "DC Shoes", nombre: "Stag Triple Black", precio: "$1,500" },
    { id: "MNK-038", marca: "", nombre: "", precio: "$0" },
    { id: "MNK-039", marca: "", nombre: "", precio: "$0" },
    { id: "MNK-040", marca: "", nombre: "", precio: "$0" },
    { id: "MNK-041", marca: "", nombre: "", precio: "$0" },
    { id: "MNK-042", marca: "", nombre: "", precio: "$0" },
    { id: "MNK-043", marca: "", nombre: "", precio: "$0" },
    { id: "MNK-044", marca: "", nombre: "", precio: "$0" },
    { id: "MNK-045", marca: "", nombre: "", precio: "$0" }
];

// ============================================================
//  FUNCIONES AUXILIARES
// ============================================================
function cleanPrice(priceStr) {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
}

// ============================================================
//  RENDERIZADO DEL CATÁLOGO
// ============================================================
function renderCatalog(items) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                Sin resultados para la selección actual.
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const mensaje = encodeURIComponent(
            `Hola Monarch Mx, me interesa adquirir el modelo ${item.marca} ${item.nombre} (Referencia: ${item.id}). ¿Tienen stock disponible?`
        );
        const urlWhatsApp = `https://wa.me/${CONFIG_WHATSAPP}?text=${mensaje}`;

        const card = document.createElement('article');
        card.className = 'card';

        card.innerHTML = `
            <div class="image-wrapper">
                <img src="assets/img/${item.id}.jpg" alt="${item.nombre}" class="product-image" onerror="this.style.display='none'">
                <div class="image-placeholder" style="display:none;"></div>
            </div>
            <div class="info">
                <span class="brand">${item.marca}</span>
                <h2 class="name">${item.nombre}</h2>
                <div class="price">${item.precio} MXN</div>
                <a href="${urlWhatsApp}" target="_blank" class="btn-buy">
                    Consultar Disponibilidad
                </a>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ============================================================
//  PROCESAMIENTO DE FILTROS Y ORDENAMIENTO
// ============================================================
function processCatalogData() {
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const priceSort  = document.getElementById('priceSort');

    const texto = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const marca = brandFilter ? brandFilter.value : 'all';
    const orden = priceSort ? priceSort.value : 'default';

    // 1. Filtrado combinado (texto + marca)
    let resultado = SNEAKERS_DATA.filter(item => {
        const coincideTexto = item.nombre.toLowerCase().includes(texto) ||
                              item.marca.toLowerCase().includes(texto) ||
                              item.id.toLowerCase().includes(texto);
        const coincideMarca = marca === 'all' || item.marca.toLowerCase() === marca.toLowerCase();
        return coincideTexto && coincideMarca;
    });

    // 2. Ordenamiento por precio (asc / desc)
    if (orden === 'asc') {
        resultado.sort((a, b) => cleanPrice(a.precio) - cleanPrice(b.precio));
    } else if (orden === 'desc') {
        resultado.sort((a, b) => cleanPrice(b.precio) - cleanPrice(a.precio));
    }

    renderCatalog(resultado);
}

// ============================================================
//  INICIALIZACIÓN CUANDO EL DOM ESTÉ LISTO
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const priceSort  = document.getElementById('priceSort');

    // Solo asignamos listeners si los elementos existen
    if (searchInput) searchInput.addEventListener('input', processCatalogData);
    if (brandFilter) brandFilter.addEventListener('change', processCatalogData);
    if (priceSort)  priceSort.addEventListener('change', processCatalogData);

    // Render inicial
    renderCatalog(SNEAKERS_DATA);
});
function processCatalogData() {
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const priceSort  = document.getElementById('priceSort');

    const texto = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const marca = brandFilter ? brandFilter.value : 'all';
    const orden = priceSort ? priceSort.value : 'default';

    // 1. Filtrado combinado (texto + marca)
    let resultado = SNEAKERS_DATA.filter(item => {
        const coincideTexto = item.nombre.toLowerCase().includes(texto) ||
                              item.marca.toLowerCase().includes(texto) ||
                              item.id.toLowerCase().includes(texto);
        const coincideMarca = marca === 'all' || item.marca.toLowerCase() === marca.toLowerCase();
        return coincideTexto && coincideMarca;
    });

    // 2. Ordenamiento por precio (asc / desc)
    if (orden === 'asc') {
        resultado.sort((a, b) => cleanPrice(a.precio) - cleanPrice(b.precio));
    } else if (orden === 'desc') {
        resultado.sort((a, b) => cleanPrice(b.precio) - cleanPrice(a.precio));
    }

    renderCatalog(resultado);
}

// ============================================================
//  INICIALIZACIÓN CUANDO EL DOM ESTÉ LISTO
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const priceSort  = document.getElementById('priceSort');

    // Solo asignamos listeners si los elementos existen
    if (searchInput) searchInput.addEventListener('input', processCatalogData);
    if (brandFilter) brandFilter.addEventListener('change', processCatalogData);
    if (priceSort)  priceSort.addEventListener('change', processCatalogData);

    // Render inicial
    renderCatalog(SNEAKERS_DATA);
});
