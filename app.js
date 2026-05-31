const categoryImages = {
  pizzas: "assets/CartaPizzeriaNonetto01.png",
  hamburguesas: "assets/CartaPizzeriaNonetto02.png",
  sandwiches: "assets/CartaPizzeriaNonetto02.png",
  pontys: "assets/CartaPizzeriaNonetto02.png",
  postres: "assets/CartaPizzeriaNonetto02.png",
  ensaladas: "assets/CartaPizzeriaNonetto03.png",
  complementos: "assets/CartaPizzeriaNonetto03.png",
  baguettes: "assets/CartaPizzeriaNonetto03.png"
};

const categoryLabels = {
  pizzas: "Pizzas",
  hamburguesas: "Hamburguesas",
  sandwiches: "Sandwiches",
  pontys: "Pontys Nonetto",
  postres: "Postres",
  ensaladas: "Ensaladas",
  complementos: "Complementos",
  baguettes: "Baguettes"
};

function slugify(value) {
  return normalise(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function item(category, name, description, price, tags = []) {
  return {
    id: `${category}-${slugify(name)}`,
    category,
    categoryLabel: categoryLabels[category],
    name,
    description,
    prices: price,
    fromPrice: price,
    tags,
    image: categoryImages[category]
  };
}

const pizzaBaseTags = ["gluten", "lácteos", "nonetto classic", "para compartir"];
const deluxeTags = ["gluten", "lácteos", "nonetto deluxe", "para compartir"];

const products = [
  item("pizzas", "Alemana", "Salchicha alemana, cebolla caramelizada y rodajas de tomate natural. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Almadraba", "Atún, jamón dulce y cebolla morada. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Americana", "Salsa barbacoa, ternera y pechuga de pollo cocinado en Nonetto. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Blanca", "Nata, bacon y cebolla morada. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Barbacoa", "Ternera, bacon y salsa barbacoa. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Brasileña", "Piña, maíz y jamón dulce. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Calabrese", "Bacon, nata y roquefort. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Campera", "Huevo, pollo y bacon. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Cantábrica", "Anchoa y mezcla de 4 quesos. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Carbonara", "Nata, bacon y champiñones frescos. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["popular", ...pizzaBaseTags]),
  item("pizzas", "Diablo", "Chorizo, ternera, roquefort y salsa picante. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["picante", ...pizzaBaseTags]),
  item("pizzas", "Dulcinea", "Nata, pollo y jamón dulce. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Gallega", "Rodajas de tomate natural, huevo, pimienta y aceite de oliva. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Gnomo", "Popurrí de setas y champiñones frescos. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["vegetariana", ...pizzaBaseTags]),
  item("pizzas", "Ibérica", "Jamón serrano, rodajas de tomate natural, pimienta y aceite de oliva. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Kebab", "Rodajas de tomate natural, cebolla morada, ternera y salsa kebab picante o suave. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["picante", ...pizzaBaseTags]),
  item("pizzas", "Marítima", "Atún, gambas y mejillones. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Pimentonera", "Pimiento rojo, pimiento verde y ternera. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Salomón", "Nata, extra de queso y salmón. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Salpepe", "Salami, pepperoni y ternera. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Terramar", "Atún, chorizo y bacon. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", pizzaBaseTags),
  item("pizzas", "Verdor", "Alcachofas, espárragos y champiñones frescos. Base de tomate, mozzarella y orégano.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["vegetariana", ...pizzaBaseTags]),
  item("pizzas", "Nonetto Deluxe", "Bacon, queso de cabra, cebolla caramelizada y toque de miel.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["popular", ...deluxeTags]),
  item("pizzas", "Turcana Deluxe", "Pepperoni, pollo 100% elaborado en Nonetto kebab, jamón dulce y salsa yogur.", "Mediana 9,00 EUR · Familiar 13,00 EUR", deluxeTags),
  item("pizzas", "Pollo-Pop Deluxe", "Jamón dulce, palomitas de pollo y salsa césar.", "Mediana 9,00 EUR · Familiar 13,00 EUR", deluxeTags),
  item("pizzas", "Chisterpapa Deluxe", "Patatas fritas, chistorra, pimiento verde, cebolla y huevo.", "Mediana 9,00 EUR · Familiar 13,00 EUR", deluxeTags),
  item("pizzas", "Shawarma Deluxe", "Tomate natural, cebolla morada, maíz, pollo kebab, salsa de yogur y picante.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["picante", ...deluxeTags]),
  item("pizzas", "4 Estaciones Deluxe", "Alcachofas, espárragos, champiñones, jamón dulce y aceitunas negras.", "Mediana 9,00 EUR · Familiar 13,00 EUR", deluxeTags),
  item("pizzas", "Pizza a tu gusto", "Pizza con 3 ingredientes a elegir: atún, jamón dulce, cebolla, anchoas, tomate natural, pollo, nata, ternera, bacon, gambas, mejillones, salmón, chorizo, salami, espárragos, alcachofas, champiñones, maíz, pimiento rojo o verde, queso de cabra, piña, huevo, salchichas frescas, aceitunas negras, cheddar, edam o roquefort.", "Mediana 9,00 EUR · Familiar 13,00 EUR", ["para compartir", "gluten", "lácteos"]),
  item("hamburguesas", "Hamburguesa simple", "Lechuga, tomate y cebolla morada.", "4,50 EUR", ["gluten"]),
  item("hamburguesas", "Hamburguesa completa", "Bacon, queso, lechuga, tomate, huevo y cebolla morada.", "5,50 EUR", ["gluten", "lácteos"]),
  item("hamburguesas", "Hamburguesa especial", "Bacon, queso, lomo adobado, lechuga, tomate y cebolla morada.", "5,50 EUR", ["gluten", "lácteos"]),
  item("hamburguesas", "Hamburguesa Nonetto", "Queso de cabra, cebolla caramelizada, bacon y alioli.", "6,50 EUR", ["popular", "gluten", "lácteos"]),
  item("hamburguesas", "Big Bang", "Cheddar, salsa burger, aros de cebolla, bacon y salsa BBQ.", "6,50 EUR", ["gluten", "lácteos"]),
  item("hamburguesas", "Hamburguesa kebab", "Pollo sazonado con especias turcas, kebab picante, edam, cebolla roja, tomate, lechuga y salsa yoghurt.", "6,50 EUR", ["picante", "gluten", "lácteos"]),
  item("hamburguesas", "Crispy Burger", "Pan brioche dulce y consistente, pechuga de pollo marinada rebozada, lechuga, tomate fresco y salsa mahonesa.", "6,00 EUR", ["gluten"]),
  item("sandwiches", "Sandwich mixto", "Jamón dulce y queso.", "4,00 EUR", ["gluten", "lácteos"]),
  item("sandwiches", "Sandwich mixto y huevo", "Jamón dulce, queso y huevo.", "4,50 EUR", ["gluten", "lácteos"]),
  item("sandwiches", "Sandwich pollo", "Ensalada de pollo con mahonesa, lechuga, tomate, jamón dulce, huevo y 3 panes.", "6,00 EUR", ["gluten"]),
  item("sandwiches", "Sandwich atún", "Atún, mahonesa, lechuga, jamón dulce, huevo, tomate y 3 panes.", "6,00 EUR", ["gluten"]),
  item("sandwiches", "Sandwich vegetal", "Lechuga, tomate, espárragos, mahonesa y jamón dulce.", "6,00 EUR", ["gluten"]),
  item("sandwiches", "Sandwich Nonetto", "Jamón dulce, cebolla caramelizada, queso de cabra recubierto de mozzarella fundida.", "6,00 EUR", ["gluten", "lácteos"]),
  item("sandwiches", "Sandwich Yanqui", "Ensalada de pollo, mahonesa, lechuga, jamón dulce, huevo, tomate, bacon, hamburguesa y queso. 4 panes.", "7,00 EUR", ["gluten", "lácteos"]),
  item("pontys", "Ponty serrana", "Cinta de lomo, jamón ibérico y pimiento frito.", "5,50 EUR", ["gluten"]),
  item("pontys", "Ponty pollo", "Ensalada de pollo con mahonesa, lechuga, huevo y tomate.", "5,50 EUR", ["gluten"]),
  item("pontys", "Ponty pollo empanado", "Queso, bacon, lechuga y tomate.", "6,00 EUR", ["gluten", "lácteos"]),
  item("pontys", "Ponty vegetal", "Lechuga, tomate, espárragos, mahonesa y huevo a la plancha.", "5,50 EUR", ["vegetariana", "gluten"]),
  item("pontys", "Ponty Nonetto", "Sobrasada y queso de cabra.", "6,00 EUR", ["popular", "gluten", "lácteos"]),
  item("pontys", "Ponty piripi", "Lomo adobado, bacon, tomate y alioli.", "5,50 EUR", ["gluten"]),
  item("pontys", "Ponty calamares", "Con alioli.", "5,50 EUR", ["gluten"]),
  item("postres", "Tarta muerte chocolate", "Postre de temporada.", "3,90 EUR", ["lácteos"]),
  item("postres", "Tarta queso y arándanos", "Postre de temporada.", "3,90 EUR", ["lácteos"]),
  item("postres", "Tarta de la abuela", "Postre de temporada.", "3,90 EUR", ["lácteos"]),
  item("postres", "Tarta 3 chocolates", "Postre de temporada.", "3,90 EUR", ["lácteos"]),
  item("postres", "Tarta San Marcos", "Postre de temporada.", "3,90 EUR", ["lácteos"]),
  item("postres", "Brownie", "Postre de temporada.", "3,90 EUR", ["lácteos"]),
  item("postres", "Tarta de turrón", "Postre de temporada.", "3,90 EUR", ["lácteos"]),
  item("ensaladas", "Ensalada crujiente", "Lechuga, tomate, nueces, queso de cabra, salsa mostaza y miel. Doble salsa + 1 EUR.", "5,50 EUR", ["vegetariana", "lácteos"]),
  item("ensaladas", "Ensalada Mil Islas", "Lechuga, pollo, maíz, jamón dulce y salsa Mil Islas. Doble salsa + 1 EUR.", "5,50 EUR", []),
  item("ensaladas", "Ensalada mediterránea", "Lechuga, tomate, zanahoria, cebolla, maíz y atún. Doble salsa + 1 EUR.", "5,50 EUR", []),
  item("ensaladas", "Ensalada pollo", "Lechuga, tomate, maíz, piña y salsa rosa. Doble salsa + 1 EUR.", "5,50 EUR", []),
  item("ensaladas", "Ensalada César", "Mozzarella, jamón dulce, pollo, picatostes y salsa césar. Doble salsa + 1 EUR.", "5,50 EUR", ["lácteos", "gluten"]),
  item("complementos", "Patatas fritas", "Con salsas alioli, mahonesa, ketchup, gaucha, BBQ, yogur, mostaza y miel, brava, kebab o césar por + 1 EUR.", "3,50 EUR", ["vegetariana", "para compartir"]),
  item("complementos", "Patatas 4 quesos", "Queso fundido en horno con 4 quesos.", "5,00 EUR", ["vegetariana", "lácteos", "para compartir"]),
  item("complementos", "Patatas mozzarella", "Queso fundido en horno con mozzarella.", "5,00 EUR", ["vegetariana", "lácteos", "para compartir"]),
  item("complementos", "Patatas rancheras", "Salsa ranchera, 3 quesos cheddar, edam, mozzarella y bacon.", "5,50 EUR", ["lácteos", "para compartir"]),
  item("complementos", "Patatas Nonetto", "Cuatro quesos fundidos con tiras de bacon frito.", "5,50 EUR", ["popular", "lácteos", "para compartir"]),
  item("complementos", "Patatas kebab", "Pollo kebab, salsas yogur y picante.", "5,50 EUR", ["picante", "para compartir"]),
  item("complementos", "Nuggets de pollo", "Acompañados de patatas fritas.", "4,50 EUR", ["gluten"]),
  item("complementos", "Aros de cebolla Mc. Cain", "Rebozados y acompañados de patatas fritas.", "5,00 EUR", ["vegetariana", "gluten"]),
  item("complementos", "Alitas de pollo", "Alitas de pollo frescas acompañadas de patatas fritas y salsa BBQ.", "5,50 EUR", ["para compartir"]),
  item("complementos", "Fingers de mozzarella", "Palito de mozzarella rebozada acompañada de patatas fritas.", "4,50 EUR", ["vegetariana", "gluten", "lácteos"]),
  item("complementos", "Nachos", "Triángulos de maíz con mozzarella y queso cheddar fundido.", "5,00 EUR", ["vegetariana", "lácteos", "para compartir"]),
  item("complementos", "Nachos Nonetto", "Triángulos de maíz con mozzarella, queso cheddar fundido, jamón dulce y ternera.", "6,00 EUR", ["lácteos", "para compartir"]),
  item("complementos", "Roll kebab Nonetto", "Pollo kebab, lechuga juliana, tomate, maíz, cebolla roja, salsa de yogur y picante, enrollado en masa. Sin verdura con doble de carne + 1,50 EUR.", "6,50 EUR", ["picante", "gluten", "lácteos"]),
  item("complementos", "Salchipapa", "Patatas fritas juliette, tomate frito, nata, mahonesa, queso mozzarella y salchichas Frankfurt al horno.", "5,50 EUR", ["lácteos"]),
  item("complementos", "Paninetto", "Base de pan baguette, salsa fresca crema o tomate, mozzarella, edam y 2 ingredientes a elegir.", "5,50 EUR", ["gluten", "lácteos"]),
  item("baguettes", "Baguette serrana", "Cinta de lomo, jamón ibérico y pimiento frito.", "5,50 EUR", ["gluten"]),
  item("baguettes", "Baguette pollo", "Ensalada de pollo con mahonesa, lechuga, jamón dulce y huevo.", "5,50 EUR", ["gluten"]),
  item("baguettes", "Baguette lomito", "Lomo adobado, queso y huevo.", "5,50 EUR", ["gluten", "lácteos"]),
  item("baguettes", "Baguette bacon", "Huevo y bacon.", "5,50 EUR", ["gluten"]),
  item("baguettes", "Baguette vegetal", "Lechuga, tomate, espárragos, mahonesa y jamón dulce.", "5,50 EUR", ["gluten"]),
  item("baguettes", "Baguette Nonetto", "Bacon, queso de cabra y lomo adobado.", "6,00 EUR", ["popular", "gluten", "lácteos"])
];

const menuGrid = document.querySelector("#menuGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const activeContext = document.querySelector("#activeContext");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const tagButtons = [...document.querySelectorAll(".tag-filter")];
const modal = document.querySelector("#productModal");

let activeCategory = "todos";
const activeTags = new Set();

function normalise(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function productMatchesSearch(product, query) {
  if (!query) return true;
  const haystack = normalise(`${product.name} ${product.description} ${product.tags.join(" ")}`);
  return haystack.includes(normalise(query));
}

function productMatchesFilters(product) {
  const categoryMatch = activeCategory === "todos" || product.category === activeCategory;
  const tagsMatch = activeTags.size === 0 || [...activeTags].every((tag) => product.tags.includes(tag));
  return categoryMatch && tagsMatch;
}

function getVisibleProducts() {
  return products.filter((product) => productMatchesFilters(product) && productMatchesSearch(product, searchInput.value.trim()));
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();
  menuGrid.innerHTML = visibleProducts.map(renderProductCard).join("");
  resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "producto" : "productos"}`;
  activeContext.textContent = buildContextText();

  document.querySelectorAll("[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => openProduct(button.dataset.productId));
  });
}

function renderProductCard(product) {
  const tags = product.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");

  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-body">
        <div class="product-top">
          <h3 class="product-title">${product.name}</h3>
          <span class="price">${product.fromPrice}</span>
        </div>
        <p class="product-description">${product.description}</p>
        <div class="chips" aria-label="Etiquetas de ${product.name}">${tags}</div>
        <div class="product-actions">
          <button class="details-button" type="button" data-product-id="${product.id}">Ver detalle</button>
        </div>
      </div>
    </article>
  `;
}

function buildContextText() {
  const categoryText = activeCategory === "todos" ? "toda la carta" : `categoría ${activeCategory}`;
  const tagText = activeTags.size ? ` con ${[...activeTags].join(", ")}` : "";
  const queryText = searchInput.value.trim() ? ` buscando "${searchInput.value.trim()}"` : "";
  return `Mostrando ${categoryText}${tagText}${queryText}`;
}

function setActiveCategory(category) {
  activeCategory = category;
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === category);
  });
  renderProducts();
}

function toggleTag(tag, button) {
  if (activeTags.has(tag)) {
    activeTags.delete(tag);
  } else {
    activeTags.add(tag);
  }

  button.classList.toggle("is-active", activeTags.has(tag));
  renderProducts();
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  document.querySelector("#modalImage").src = product.image;
  document.querySelector("#modalImage").alt = product.name;
  document.querySelector("#modalCategory").textContent = product.categoryLabel;
  document.querySelector("#modalTitle").textContent = product.name;
  document.querySelector("#modalDescription").textContent = product.description;
  document.querySelector("#modalPrices").textContent = product.prices;
  document.querySelector("#modalTags").textContent = product.tags.join(", ");

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveCategory(button.dataset.filter));
});

tagButtons.forEach((button) => {
  button.addEventListener("click", () => toggleTag(button.dataset.tag, button));
});

searchInput.addEventListener("input", renderProducts);

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

renderProducts();
