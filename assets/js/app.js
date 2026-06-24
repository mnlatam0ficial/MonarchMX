// ============================================================
//  CONFIGURACIÓN GLOBAL
// ============================================================
const CONFIG_WHATSAPP = "522225364045"; // Número actualizado (México: 52 + 2225364045)

// ============================================================
//  BASE DE DATOS (37 modelos)
// ============================================================
const SNEAKERS_DATA = [
    { id: "MNK-001", marca: "Nike", nombre: "Air Max 3", precio: "$1,400" },
    { id: "MNK-002", marca: "Jordan", nombre: "6 Rings", precio: "$1,800" },
    { id: "MNK-003", marca: "Nike", nombre: "Air Max 720 Orca / Sport / Tortuga", precio: "$2,000" },
    { id: "MNK-004", marca: "Nike", nombre: "Air Max 97", precio: "$2,000" },
    { id: "MNK-005", marca: "New Balance", nombre: "990 Late Vino / Clásico", precio: "$1,400" },
    { id: "MNK-006", marca: "Adidas", nombre: "Adizero Ultra Ligero", precio: "$1,800" },
    { id: "MNK-007", marca: "Nike", nombre: "Air Force 1 Clásico", precio: "$1,600" },
    { id: "MNK-008", marca: "Nike", nombre: "Air Force 1 Premium Importado (Con Placas)", precio: "$1,900" },
    { id: "MNK-009", marca: "Alexander McQueen", nombre: "Edición Pedrería / Swaro", precio: "$2,600" },
    { id: "MNK-010", marca: "Alexander McQueen", nombre: "Rotulado Clásico", precio: "$1,900" },
    { id: "MNK-011", marca: "Nike", nombre: "Blazer Mid / Doble Swoosh", precio: "$1,500" },
    { id: "MNK-012", marca: "Nike", nombre: "Air Max Plus TN Camaleón", precio: "$2,400" },
    { id: "MNK-013", marca: "Nike", nombre: "Cortez Clásico", precio: "$1,300" },
    { id: "MNK-014", marca: "Nike", nombre: "Dunk Low Piel (Mantequilla/Colores)", precio: "$1,500" },
    { id: "MNK-015", marca: "Jordan", nombre: "1 Retro Fragment", precio: "$1,500" },
    { id: "MNK-016", marca: "Golden Goose", nombre: "Golden Premium", precio: "$1,800" },
    { id: "MNK-017", marca: "Nike", nombre: "Hyperdunk", precio: "$2,400" },
    { id: "MNK-018", marca: "Nike", nombre: "LeBron", precio: "$2,300" },
    { id: "MNK-019", marca: "Adidas", nombre: "Forum Bad Bunny", precio: "$1,900" },
    { id: "MNK-020", marca: "Christian Louboutin", nombre: "Bota Suela Roja", precio: "$2,100" },
    { id: "MNK-021", marca: "Louis Vuitton", nombre: "Monogram / Clásico", precio: "$2,000" },
    { id: "MNK-022", marca: "Nike", nombre: "Metcon", precio: "$1,600" },
    { id: "MNK-023", marca: "New Balance", nombre: "530", precio: "$1,500" },
    { id: "MNK-024", marca: "New Balance", nombre: "9060", precio: "$1,800" },
    { id: "MNK-025", marca: "Nike", nombre: "Nocta", precio: "$1,700" },
    { id: "MNK-026", marca: "On", nombre: "On Cloud Clásico", precio: "$1,900" },
    { id: "MNK-027", marca: "On", nombre: "On Cloud Edición Especial", precio: "$2,100" },
    { id: "MNK-028", marca: "Nike", nombre: "Air Pippen", precio: "$2,000" },
    { id: "MNK-029", marca: "Jordan", nombre: "4 Retro", precio: "$1,600" },
    { id: "MNK-030", marca: "Adidas", nombre: "Samba Clásico / Ediciones", precio: "$1,500" },
    { id: "MNK-031", marca: "Christian Louboutin", nombre: "Low Suelita Roja", precio: "$2,100" },
    { id: "MNK-032", marca: "Adidas", nombre: "Superstar", precio: "$1,700" },
    { id: "MNK-033", marca: "Adidas", nombre: "Terrex", precio: "$1,900" },
    { id: "MNK-034", marca: "Timberland", nombre: "Clásica", precio: "$1,600" },
    { id: "MNK-035", marca: "Nike", nombre: "Travis Scott", precio: "$1,500" },
    { id: "MNK-036", marca: "Adidas", nombre: "Ultraboost", precio: "$2,000" },
    { id: "MNK-037", marca: "Vans", nombre: "Old Skool / Suede", precio: "$1,400" }
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
                <div class="image-placeholder" style="display:${item.id};"></div>
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
