// Configuración de contacto global
const CONFIG_WHATSAPP = "522220000000"; // Tu número telefónico de atención (Cámbialo por el tuyo real)

// Base de datos oficial del inventario Monarch Mx
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
    { id: "MNK-022", marca: "Nike", merge: "Metcon", nombre: "Metcon", precio: "$1,600" },
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

// Captura de Nodos en el DOM
const DOM_grid = document.getElementById('catalogGrid');
const DOM_search = document.getElementById('searchInput');
const DOM_brand = document.getElementById('brandFilter');
const DOM_sort = document.getElementById('priceSort');

// Limpiador de formato numérico (Para poder ordenar precios de mayor a menor)
function cleanPrice(priceStr) {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
}

// Inyección de UI
function renderCatalog(items) {
    if (!DOM_grid) return;
    DOM_grid.innerHTML = '';
    
    if (items.length === 0) {
        DOM_grid.innerHTML = '<div class="no-results" style="color: #666; text-align: center; padding: 40px; width: 100%;">Sin resultados para la selección actual.</div>';
        return;
    }

    items.forEach(item => {
        const textMessage = encodeURIComponent(`Hola Monarch Mx, me interesa adquirir el modelo ${item.marca} ${item.nombre} (Referencia: ${item.id}). ¿Tienen stock disponible?`);
        const targetURL = `https://wa.me/${CONFIG_WHATSAPP}?text=${textMessage}`;

        // Estructura limpia de tarjetas
        const cardStructure = `
            <article class="card" style="background: #0a0a0a; padding: 15px; border-radius: 8px; border: 1px solid #1a1a1a; text-align: center; transition: all 0.3s ease;">
                <div class="image-wrapper" style="background: #111; height: 200px; display: flex; align-items: center; justify-content: center; border-radius: 6px; margin-bottom: 15px; border: 1px dashed #222;">
                    <div class="image-placeholder" style="color: #444; font-size: 0.8rem; font-family: monospace;">${item.id} // NO IMAGE</div>
                </div>
                <div class="info">
                    <span class="brand" style="color: #666; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 5px;">${item.marca}</span>
                    <h2 class="name" style="color: #E5E4E2; font-size: 1rem; font-weight: 400; margin: 0 0 10px 0; height: 40px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${item.nombre}</h2>
                    <div class="price" style="color: #fff; font-size: 1.2rem; font-weight: 700; margin-bottom: 15px;">${item.precio} MXN</div>
                    <a href="${targetURL}" target="_blank" class="btn-buy" style="display: block; background: #E5E4E2; color: #000; text-decoration: none; padding: 10px; font-size: 0.85rem; font-weight: bold; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; transition: background 0.2s;">Consultar Disponibilidad</a>
                </div>
            </article>
        `;
        DOM_grid.innerHTML += cardStructure;
    });
}

// Sistema de Procesamiento de Flujos (Filtros combinados)
function processCatalogData() {
    const textQuery = DOM_search ? DOM_search.value.trim().toLowerCase() : '';
    const selectedBrand = DOM_brand ? DOM_brand.value : 'all';
    const sortingCriteria = DOM_sort ? DOM_sort.value : 'default';

    let targetDataSet = [...SNEAKERS_DATA];

    // Evaluación de criterios de búsqueda
    targetDataSet = targetDataSet.filter(product => {
        const matchesText = product.nombre.toLowerCase().includes(textQuery) || 
                            product.marca.toLowerCase().includes(textQuery) || 
                            product.id.toLowerCase().includes(textQuery);
        const matchesBrand = selectedBrand === 'all' || product.marca.toLowerCase() === selectedBrand.toLowerCase();
        
        return matchesText && matchesBrand;
    });

    // Clasificación por precio (Ordenamiento)
    if (sortingCriteria === 'low') {
        targetDataSet.sort((a, b) => cleanPrice(a.precio) - cleanPrice(b.precio));
    } else if (sortingCriteria === 'high') {
        targetDataSet.sort((a, b) => cleanPrice(b.precio) - cleanPrice(a.precio));
    }

    renderCatalog(targetDataSet);
}

// Event Listeners para interacción instantánea
if (DOM_search) DOM_search.addEventListener('input', processCatalogData);
if (DOM_brand) DOM_brand.addEventListener('change', processCatalogData);
if (DOM_sort) DOM_sort.addEventListener('change', processCatalogData);

// Inicializar el catálogo al cargar la página
renderCatalog(SNEAKERS_DATA);

    // Criterios de ordenamiento
    if (sortingCriteria === 'asc') {
        targetDataSet.sort((alpha, beta) => cleanPrice(alpha.precio) - cleanPrice(beta.precio));
    } else if (sortingCriteria === 'desc') {
        targetDataSet.sort((alpha, beta) => cleanPrice(beta.precio) - cleanPrice(alpha.precio));
    }

    renderCatalog(targetDataSet);
}

// Escuchadores de Eventos del Sistema
DOM_search.addEventListener('input', processCatalogData);
DOM_brand.addEventListener('change', processCatalogData);
DOM_sort.addEventListener('change', processCatalogData);

// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog(SNEAKERS_DATA);
});
