// Configuración de contacto global
const CONFIG_WHATSAPP = "522220000000"; // Tu número telefónico de atención

// Base de datos oficial del inventario Monarch Mx[span_0](start_span)[span_0](end_span)
const SNEAKERS_DATA = [
    { id: "MNK-001", marca: "Nike", nombre: "Air Max 3", precio: "$1,400" },[span_1](start_span)[span_1](end_span)
    { id: "MNK-002", marca: "Jordan", nombre: "6 Rings", precio: "$1,800" },[span_2](start_span)[span_2](end_span)
    { id: "MNK-003", marca: "Nike", nombre: "Air Max 720 Orca / Sport / Tortuga", precio: "$2,000" },[span_3](start_span)[span_3](end_span)
    { id: "MNK-004", marca: "Nike", nombre: "Air Max 97", precio: "$2,000" },[span_4](start_span)[span_4](end_span)
    { id: "MNK-005", marca: "New Balance", nombre: "990 Late Vino / Clásico", precio: "$1,400" },[span_5](start_span)[span_5](end_span)
    { id: "MNK-006", marca: "Adidas", nombre: "Adizero Ultra Ligero", precio: "$1,800" },[span_6](start_span)[span_6](end_span)
    { id: "MNK-007", marca: "Nike", nombre: "Air Force 1 Clásico", precio: "$1,600" },[span_7](start_span)[span_7](end_span)
    { id: "MNK-008", marca: "Nike", nombre: "Air Force 1 Premium Importado (Con Placas)", precio: "$1,900" },[span_8](start_span)[span_8](end_span)
    { id: "MNK-009", marca: "Alexander McQueen", nombre: "Edición Pedrería / Swaro", precio: "$2,600" },[span_9](start_span)[span_9](end_span)
    { id: "MNK-010", marca: "Alexander McQueen", nombre: "Rotulado Clásico", precio: "$1,900" },[span_10](start_span)[span_10](end_span)
    { id: "MNK-011", marca: "Nike", nombre: "Blazer Mid / Doble Swoosh", precio: "$1,500" },[span_11](start_span)[span_11](end_span)
    { id: "MNK-012", marca: "Nike", nombre: "Air Max Plus TN Camaleón", precio: "$2,400" },[span_12](start_span)[span_12](end_span)
    { id: "MNK-013", marca: "Nike", nombre: "Cortez Clásico", precio: "$1,300" },[span_13](start_span)[span_13](end_span)
    { id: "MNK-014", marca: "Nike", nombre: "Dunk Low Piel (Mantequilla/Colores)", precio: "$1,500" },[span_14](start_span)[span_14](end_span)
    { id: "MNK-015", marca: "Jordan", nombre: "1 Retro Fragment", precio: "$1,500" },[span_15](start_span)[span_15](end_span)
    { id: "MNK-016", marca: "Golden Goose", nombre: "Golden Premium", precio: "$1,800" },[span_16](start_span)[span_16](end_span)
    { id: "MNK-017", marca: "Nike", nombre: "Hyperdunk", precio: "$2,400" },[span_17](start_span)[span_17](end_span)
    { id: "MNK-018", marca: "Nike", nombre: "LeBron", precio: "$2,300" },[span_18](start_span)[span_18](end_span)
    { id: "MNK-019", marca: "Adidas", nombre: "Forum Bad Bunny", precio: "$1,900" },[span_19](start_span)[span_19](end_span)
    { id: "MNK-020", marca: "Christian Louboutin", nombre: "Bota Suela Roja", precio: "$2,100" },[span_20](start_span)[span_20](end_span)
    { id: "MNK-021", marca: "Louis Vuitton", nombre: "Monogram / Clásico", precio: "$2,000" },[span_21](start_span)[span_21](end_span)
    { id: "MNK-022", marca: "Nike", nombre: "Metcon", precio: "$1,600" },[span_22](start_span)[span_22](end_span)
    { id: "MNK-023", marca: "New Balance", nombre: "530", precio: "$1,500" },[span_23](start_span)[span_23](end_span)
    { id: "MNK-024", marca: "New Balance", nombre: "9060", precio: "$1,800" },[span_24](start_span)[span_24](end_span)
    { id: "MNK-025", marca: "Nike", nombre: "Nocta", precio: "$1,700" },[span_25](start_span)[span_25](end_span)
    { id: "MNK-026", marca: "On", nombre: "On Cloud Clásico", precio: "$1,900" },[span_26](start_span)[span_26](end_span)
    { id: "MNK-027", marca: "On", nombre: "On Cloud Edición Especial", precio: "$2,100" },[span_27](start_span)[span_27](end_span)
    { id: "MNK-028", marca: "Nike", nombre: "Air Pippen", precio: "$2,000" },[span_28](start_span)[span_28](end_span)
    { id: "MNK-029", marca: "Jordan", nombre: "4 Retro", precio: "$1,600" },[span_29](start_span)[span_29](end_span)
    { id: "MNK-030", marca: "Adidas", nombre: "Samba Clásico / Ediciones", precio: "$1,500" },[span_30](start_span)[span_30](end_span)
    { id: "MNK-031", marca: "Christian Louboutin", nombre: "Low Suelita Roja", precio: "$2,100" },[span_31](start_span)[span_31](end_span)
    { id: "MNK-032", marca: "Adidas", nombre: "Superstar", precio: "$1,700" },[span_32](start_span)[span_32](end_span)
    { id: "MNK-033", marca: "Adidas", nombre: "Terrex", precio: "$1,900" },[span_33](start_span)[span_33](end_span)
    { id: "MNK-034", marca: "Timberland", nombre: "Clásica", precio: "$1,600" },[span_34](start_span)[span_34](end_span)
    { id: "MNK-035", marca: "Nike", nombre: "Travis Scott", precio: "$1,500" },[span_35](start_span)[span_35](end_span)
    { id: "MNK-036", marca: "Adidas", nombre: "Ultraboost", precio: "$2,000" },[span_36](start_span)[span_36](end_span)
    { id: "MNK-037", marca: "Vans", nombre: "Old Skool / Suede", precio: "$1,400" }[span_37](start_span)[span_37](end_span)
];

// Captura de Nodos en el DOM
const DOM_grid = document.getElementById('catalogGrid');
const DOM_search = document.getElementById('searchInput');
const DOM_brand = document.getElementById('brandFilter');
const DOM_sort = document.getElementById('priceSort');

// Limpiador de formato numérico
function cleanPrice(priceStr) {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
}

// Inyección de UI
function renderCatalog(items) {
    DOM_grid.innerHTML = '';
    
    if (items.length === 0) {
        DOM_grid.innerHTML = '<div class="no-results">Sin resultados para la selección actual.</div>';
        return;
    }

    items.forEach(item => {
        const textMessage = encodeURIComponent(`Hola Monarch Mx, me interesa adquirir el modelo ${item.marca} ${item.nombre} (Referencia: ${item.id}). ¿Tienen stock disponible?`);
        const targetURL = `https://wa.me/${CONFIG_WHATSAPP}?text=${textMessage}`;

        // Nota de producción: Cuando metas tus imágenes en asset/images, solo quita el string estático e implementa la tag:
        // <img src="assets/images/${item.id}.jpg" alt="${item.nombre}" style="width:100%; height:100%; object-fit:cover;">
        
        const cardStructure = `
            <article class="card">
                <div class="image-wrapper">
                    <div class="image-placeholder">${item.id} // NO IMAGE</div>
                </div>
                <div class="info">
                    <span class="brand">${item.marca}</span>
                    <h2 class="name">${item.nombre}</h2>
                    <span class="id-tag">REF: ${item.id}</span>
                    <div class="price">${item.precio}</div>
                    <a href="${targetURL}" target="_blank" class="btn-buy">Consultar Disponibilidad</a>
                </div>
            </article>
        `;
        DOM_grid.innerHTML += cardStructure;
    });
}

// Sistema de Procesamiento de Flujos (Filtros combinados)
function processCatalogData() {
    const textQuery = DOM_search.value.trim().toLowerCase();
    const selectedBrand = DOM_brand.value;
    const sortingCriteria = DOM_sort.value;

    let targetDataSet = [...SNEAKERS_DATA];

    // Evaluación de criterios de búsqueda
    targetDataSet = targetDataSet.filter(product => {
        const matchesText = product.nombre.toLowerCase().includes(textQuery) || 
                            product.marca.toLowerCase().includes(textQuery) || 
                            product.id.toLowerCase().includes(textQuery);
        const matchesBrand = selectedBrand === 'all' || product.marca === selectedBrand;
        
        return matchesText && matchesBrand;
    });

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
