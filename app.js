const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SlipSpeed",
    price: 140,
    colors: [
      {
        code: "black",
        img: "./img2/SlipSpeed.png",
      },
      {
        code: "c8df54",
        img: "./img2/SlipSpeed2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Curry 11",
    price: 160,
    colors: [
      {
        code: "lightgray",
        img: "./img2/curry11.png",
      },
      {
        code: "teal",
        img: "./img2/curry112.png",
      },
    ],
  },
  {
    id: 3,
    title: "Project Rock",
    price: 160,
    colors: [
      {
        code: "black",
        img: "./img2/ProjectRock.png",
      },
      {
        code: "darkblue",
        img: "./img2/ProjectRock2.png",
      },
    ],
  },
  {
    id: 4,
    title: "HOVR™ Phantom",
    price: 140,
    colors: [
      {
        code: "white",
        img: "./img2/hovrphantom.png",
      },
      {
        code: "maroon",
        img: "./img2/hovrphantom2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Lockdown",
    price: 70,
    colors: [
      {
        code: "red",
        img: "./img2/Lockdown.png",
      },
      {
        code: "lightblue",
        img: "./img2/Lockdown2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});