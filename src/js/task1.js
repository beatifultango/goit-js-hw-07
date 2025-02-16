const categories = document.querySelectorAll(".item-item");
console.log(`number of categories: ${categories.length}`);
categories.forEach((category) => {
  const list = category.nextElementSibling;
  const itemCount = list.children.length;
  console.log(`Categories: ${category.textContent}\nElements: ${itemCount}`);
});
