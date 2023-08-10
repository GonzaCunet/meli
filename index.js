function searchProduct(data) {
  const content = document.querySelector(".content");
  const template = document.querySelector("#template");
  document.querySelector(".results").textContent =
    "Resultados:" + data.paging.total;
  // for (i = 0; i < 10; i++) {
  //   const clone = document.importNode(template.content, true); //poner content es para rellenar el contenido del template
  //   clone.querySelector(".result-item-title").textContent =
  //     data.results[i].title;
  //   content.appendChild(clone);
  // }

  data.results.forEach((e) => {
    const clone = document.importNode(template.content, true);
    clone.querySelector(".result-item-title").textContent = e.title;
    clone.querySelector(".result-item-condition").textContent = e.condition;
    clone.querySelector(".result-item-sell-count").textContent =
      "Vendidos: " + e.sold_quantity;
    clone.querySelector(".result-item-price").textContent = "$" + e.price;
    clone.querySelector(".result-item-img").setAttribute("src", e.thumbnail);

    content.appendChild(clone);
  });
  console.log(data);
}
function main() {
  const form = document.querySelector(".search-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const find = e.target.buscar.value; //e.target o form es lo mismo porque el evento apunta a el formulario

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + find)
      .then((response) => response.json())
      .then((data) => searchProduct(data));
  });
}

main();
