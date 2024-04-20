const products = [
  {
    ProductName: "Call of Duty: Black Ops",
    Img: "./images/codbo.webp",
    Price: 1363500,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Call of Duty: Infinite Warfare",
    Img: "./images/codiw.jpg",
    Price: 1363500,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Call of Duty: Modern Warfare 3",
    Img: "./images/codmw3.jpg",
    Price: 1799000,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Call of Duty: Warzone",
    Img: "./images/codw.avif",
    Price: "Free",
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Minecraft: Java Edition",
    Img: "./images/m.webp",
    Price: 2999,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Minecraft Earth",
    Img: "./images/me.png",
    Price: "Out of Stock",
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Minecraft Legends",
    Img: "./images/mcl.jpg",
    Price: 3999,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Minecraft: Story Mode",
    Img: "./images/mcsm.jpeg",
    Price: "Out of Stock",
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "There Is No Game: Wrong Dimension",
    Img: "./images/tingwd.jpg",
    Price: 187000,
    OriginalPrice: 220000,
    Discount: -15,
  },
  {
    ProductName: "Celeste",
    Img: "./images/c.png",
    Price: 47000,
    OriginalPrice: 188000,
    Discount: -75,
  },
  {
    ProductName: "Geometry Dash",
    Img: "./images/god.jpg",
    Price: 29000,
    OriginalPrice: 58000,
    Discount: -50,
  },
  {
    ProductName: "Portal",
    Img: "./images/p.jpg",
    Price: 14000,
    OriginalPrice: 142000,
    Discount: -90,
  },
];

const ProductReplacer = [
  {
    ProductName: "Five Nights At Freddy's",
    Img: "./images/FNAF.jpg",
    Price: 100000,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Five Nights At Freddy's 2",
    Img: "./images/FNAF2.jpg",
    Price: 100000,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Five Nights At Freddy's 3",
    Img: "./images/FNAF3.jpg",
    Price: 100000,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Five Nights At Freddy's 4",
    Img: "./images/FNAF4.jpg",
    Price: 100000,
    OriginalPrice: 0,
    Discount: 0,
  },
];

const PRReplacer = [
  {
    ProductName: "Call of Duty: Black Ops",
    Img: "./images/codbo.webp",
    Price: 1363500,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Call of Duty: Infinite Warfare",
    Img: "./images/codiw.jpg",
    Price: 1363500,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Call of Duty: Modern Warfare 3",
    Img: "./images/codmw3.jpg",
    Price: 1799000,
    OriginalPrice: 0,
    Discount: 0,
  },
  {
    ProductName: "Call of Duty: Warzone",
    Img: "./images/codw.avif",
    Price: "Free",
    OriginalPrice: 0,
    Discount: 0,
  },
];
const FPSItem = document.querySelector(".fps-row");
const SandboxItem = document.querySelector(".sandbox-row");
const ActionItem = document.querySelector(".action-row");
const Horror = document.getElementById("Horror");
const Puzzle = document.getElementById("Puzzle");
const Fighting = document.getElementById("Fighting");
const Revert = document.querySelector(".FPSnav");

for (let i = 0; i < 4; i++) {
  FPSItem.innerHTML += `<div class="product-wrapper col-3">
    <div class="product">
      <a href="./product/product.html">
        <img src="${products[i].Img}" alt="" class="product-img" />
      </a>
      <a href="./product/product.html" class="product-name">
        <h4>${products[i].ProductName}</h4>
        <div class="rate">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </a>
      <span class="product-price">${products[i].Price} </span>
      <s class="old-price">${products[i].OriginalPrice} </s>
      <span class="discount">${products[i].Discount}</span>
    </div>
  </div>`;
}
for (let i = 4; i < 8; i++) {
  SandboxItem.innerHTML += `<div class="product-wrapper col-3">
      <div class="product">
        <a href="./product/product.html">
          <img src="${products[i].Img}" alt="" class="product-img" />
        </a>
        <a href="./product/product.html" class="product-name">
          <h4>${products[i].ProductName}</h4>
          <div class="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </a>
        <span class="product-price">${products[i].Price} </span>
        <s class="old-price">${products[i].OriginalPrice} </s>
        <span class="discount">${products[i].Discount}</span>
      </div>
    </div>`;
}
for (let i = 8; i < 12; i++) {
  ActionItem.innerHTML += `<div class="product-wrapper col-3">
      <div class="product">
        <a href="./product/product.html">
          <img src="${products[i].Img}" alt="" class="product-img" />
        </a>
        <a href="./product/product.html" class="product-name">
          <h4>${products[i].ProductName}</h4>
          <div class="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </a>
        <span class="product-price">${products[i].Price} </span>
        <s class="old-price">${products[i].OriginalPrice} </s>
        <span class="discount">${products[i].Discount}</span>
      </div>
    </div>`;
}

Horror.onclick = function () {
  document.getElementById("fps").scrollIntoView();
  document.querySelector(".FPS").innerHTML = "Horror Games";
  for (let i = 0; i < 4; i++) {
    FPSItem.innerHTML -= `<div class="product-wrapper col-3">
    </div>`;
    for (let i = 0; i < 4; i++) {
      products[i] = ProductReplacer[i];

      FPSItem.innerHTML += `<div class="product-wrapper col-3">
      <div class="product">
        <a href="./product/product.html">
          <img src="${products[i].Img}" alt="" class="product-img" />
        </a>
        <a href="./product/product.html" class="product-name">
          <h4>${products[i].ProductName}</h4>
          <div class="rate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </a>
        <span class="product-price">${products[i].Price} </span>
        <s class="old-price">${products[i].OriginalPrice} </s>
        <span class="discount">${products[i].Discount}</span>
      </div>
    </div>`;
    }
  }
};
Revert.onclick = function () {
  document.querySelector(".FPS").innerHTML = "FPS Games";
  for (let i = 0; i < 4; i++) {
    FPSItem.innerHTML -= `<div class="product-wrapper col-3">
    </div>`;
    products[i] = PRReplacer[i];
  }
  for (let i = 0; i < 4; i++) {
    FPSItem.innerHTML += `<div class="product-wrapper col-3">
          <div class="product">
            <a href="./product/product.html">
              <img src="${products[i].Img}" alt="" class="product-img" />
            </a>
            <a href="./product/product.html" class="product-name">
              <h4>${products[i].ProductName}</h4>
              <div class="rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </a>
            <span class="product-price">${products[i].Price} </span>
            <s class="old-price">${products[i].OriginalPrice} </s>
            <span class="discount">${products[i].Discount}</span>
          </div>
        </div>`;
  }
};
