const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
let isValid = true;
let formDatas = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isValid = false;
    } else {
      isValid = true;
      formDatas[input.name] = input.value.trim();
    }
    if (!isValid) {
      alert(`All areas must be fiiled in.`);
      return;
    }
    
  });
  console.log(formDatas);
  alert(`Form successfully submitted!`);
  form.reset();
});
