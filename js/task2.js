const gallery = document.querySelector(".gallery");
const list1 = document.createElement("li");
const image1 = document.createElement("img");
image1.src =
  "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
image1.alt = "White and Black Long Fur Cat";
image1.setAttribute("style", "width:360px; height: 300px; margin:10px;");
const list2 = document.createElement("li");
const image2 = document.createElement("img");
image2.src =
  "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260";
image2.alt = "Orange and White Koi Fish Near Yellow Koi Fish";
image2.setAttribute("style", "width:360px; height: 300px; margin:10px;");
const list3 = document.createElement("li");
const image3 = document.createElement("img");
image3.src =
  "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260";
image3.alt = "Group of Horses Runningh";
image3.setAttribute("style", "width:360px; height: 300px; margin:10px;");
document.body.append(image1, image2, image3);
