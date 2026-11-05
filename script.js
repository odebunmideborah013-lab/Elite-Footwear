// categories
const categoryFilter = document.getElementById("category-filter");
const shopCards = document.querySelectorAll(".shop-card");

if (categoryFilter) {
    function filterProducts() {
        const selectedCategory = categoryFilter.value;

        shopCards.forEach(function (card) {
            const category = card.dataset.category;
            const isFeatured = card.dataset.featured === "true";

            const shouldShow =
                selectedCategory === "all"
                    ? isFeatured
                    : category === selectedCategory;

            card.style.display = shouldShow ? "" : "none";
        });
    }

    categoryFilter.addEventListener("change", filterProducts);
    filterProducts();
}

const products = {
  monarch: {
    name: "Monarch Two-Tone Loafers",
    price: 45000,
    image: "images/loafers.jpeg",
    description: "Two-tone footwear for a smart, polished look."
  },

   brogue1: {
    name: "Brown Brogue",
    price: 45000,
    image: "images/brogue.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

  brogue2: {
    name: "Wing Tail Brogue",
    price: 45000,
    image: "images/brogue12.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

   brogues3: {
    name: "Wingtip Derby Shoe",
    price: 45000,
    image: "images/brogue1.jpeg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

  brogues2: {
    name: " Black Adelaide Oxford ",
    price: 45000,
    image: "images/brogue2.jpeg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

   brogues5: {
    name: " Men's two-tone brogue oxford dress shoe ",
    price: 50000,
    image: "images/brogue5.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

   brogues6: {
    name: "Black wingtip brogue dress shoe",
    price: 50000,
    image: "images/borgue6,jpg.webp",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

  brogue7: {
    name: "Single monk strap shoe",
    price: 50000,
    image: "images/brogue7.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

  brogue8: {
    name: "Men's two-tone leather Oxford dress shoes",
    price: 45000,
    image: "images/brogue8.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

  brogue9: {
    name: " Cheaney Arthur III Oxford Brogue.",
    price: 45000,
    image: "images/brogue9.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

  brogue10: {
    name: "Simons Leather Brogue Shoe",
    price: 45000,
    image: "images/brogue10.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

  brogue11: {
    name: "Two-tone chunky wingtip oxford shoes",
    price: 45000,
    image: "images/brogue11.jpg",
    description: "Refined leather shoes featuring distinctive decorative perforations and classic detailing. An excellent choice for formal events, office wear, and smart-casual outfits."
  },

   derbis1: {
    name: "Men's wholecut oxford dress shoe",
    price: 45000,
    image: "images/derbis1.jpeg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis2: {
    name: "Chunky Derby Shoe ",
    price: 50000,
    image: "images/derbis2.jpeg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis3: {
    name: "Wingtip Derby Shoe",
    price: 45000,
    image: "images/derbis3.jpeg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis4: {
    name: "Regular Fit Black Derby Shoes",
    price: 45000,
    image: "images/derbis4.webp",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis5: {
    name: "Men's Dark Green Patent Leather Chunky Derby Shoe",
    price: 45000,
    image: "images/derbis5.jpg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis6: {
    name: "Classic Derby Shoes",
    price: 45000,
    image: "images/derbis6.jpg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis7: {
    name: "Split-Toe Derby",
    price: 45000,
    image: "images/derbis7.jpg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis8: {
    name: "Sleeve Leather Derby Shoe",
    price: 45000,
    image: "images/derbis8.jpg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis9: {
    name: "black leather plain-toe Derby shoe",
    price: 45000,
    image: "images/derbis9.jpg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  derbis10: {
    name: "Bordeaux Chunky derby",
    price: 45000,
    image: "images/derbis10.jpg",
    description: "Timeless lace-up shoes crafted for a refined, polished look. Perfect for business meetings, formal occasions, and smart everyday wear."
  },

  cognac: {
    name: "Cognac Luxe Slides",
    price: 15000,
    image: "images/slip.jpeg",
    description: "Brown slides with a stylish buckle detail."
  },
  onyx: {
    name: "Onyx Buckle Slides",
    price: 15000,
    image: "images/slide.jpeg",
    description: "Black buckle slides for everyday style."
  },
  heritage: {
    name: "Heritage Pattern Sandals",
    price: 25000,
    image: "images/guci.webp",
    description: "Classic black sandals with a patterned footbed."
  },
  stripe: {
    name: "Elite Stripe Thong Sandals",
    price: 25000,
    image: "images/stripe.jpg",
    description: "Black thong sandals with distinctive striped straps."
  },
  urban: {
    name: "Urban Comfort Cross-Strap",
    price: 35000,
    image: "images/cross.jpeg",
    description: "Cross-strap sandals with contrasting white stitching."
  },
  luxury: {
    name: "Luxury Buckle Slides",
    price: 20000,
    image: "images/slide1.jpg",
    description: "Brown buckle slides for everyday style."
  },
  comfort: {
    name: "Mason Slingback Sandal",
    price: 20000,
    image: "images/sandal9.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandals3: {
    name: "Comfort Strap Sandals",
    price: 25000,
    image: "images/sandals3.jpg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandals4: {
    name: "Comfort Strap Sandals",
    price: 20000,
    image: "images/sandal4.jpg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal5: {
    name: " Black Smart Leather Sandals",
    price: 25000,
    image: "images/sandal5.jpg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal6: {
    name: "Reformation Ludo Toe Ring Strappy Flat Sandal ",
    price: 25000,
    image: "images/sandal6.jpg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal7: {
    name: "BW- Classy Brown White Male Palm Slippers",
    price: 25000,
    image: "images/sandal7.jpg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal8: {
    name: "Men's leather slide sandals ",
    price: 35000,
    image: "images/sandal8.jpg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal10: {
    name: "Medusa Logo Clip Sandals",
    price: 35000,
    image: "images/sandal10.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal11: {
    name: "brown leather double-strap sandals",
    price: 35000,
    image: "images/sandal11.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal12: {
    name: "Italian Fabi Sandal",
    price: 35000,
    image: "images/sandal12.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal13: {
    name: "Glossy Double Strap Sandals",
    price: 35000,
    image: "images/sandal13.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal14: {
    name: "Touch Strap Chunky Sandals",
    price: 35000,
    image: "images/sandal14.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal15: {
    name: "Men's leather smart sandals",
    price: 35000,
    image: "images/sandal15.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal16: {
    name: " Boston flame-patterned clogs",
    price: 35000,
    image: "images/sandal16.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

  sandal17: {
    name: "BrikenStock Arizona Sandal",
    price: 35000,
    image: "images/sandal17.jpeg",
    description: "Strap sandals with contrasting white stitching."
  },

   hslide: {
    name: "H-Shaped Slides",
    price: 20000,
    image: "images/slide2.jpg",
    description: "Brown buckle slides for everyday style."
  },

  slide3: {
    name: " Square-Toe Thong Sandal ",
    price: 20000,
    image: "images/slide3.jpg",
    description: "Brown buckle slides for everyday style."
  },

  slide4: {
    name: " Black and white slide sandals ",
    price: 14000,
    image: "images/slide4.jpg",
    description: "Brown buckle slides for everyday style."
  },

   slide5: {
    name: " Women's Flat Buckle Open-Toe Slide Sandals",
    price: 20000,
    image: "images/slide5.jpg",
    description: "Brown buckle slides for everyday style."
  },

   slide6: {
    name: "Luxury Men's Cross-Strap Slide Sandals",
    price: 20000,
    image: "images/slide6.jpg",
    description: "Brown buckle slides for everyday style."
  },

   slide7: {
    name: " Hermès Chypre Sandal",
    price: 35000,
    image: "images/slide7.jpg",
    description: "Brown buckle slides for everyday style."
  },

   slide8: {
    name: "Dolce & Gabbana Bianca Interlock Slide",
    price: 15000,
    image: "images/slide8.jpg",
    description: "Brown buckle slides for everyday style."
  },

  slide9: {
    name: " Project Cloud Jannel Flat Summer Slide",
    price: 15000,
    image: "images/slide9.jpg",
    description: "Brown buckle slides for everyday style."
  },

  slide11: {
    name: "Transparent Leopard Print Slide Sandals",
    price: 18500,
    image: "images/slide11.jpg",
    description: "Brown buckle slides for everyday style."
  },

  loafers1: {
    name: "Black patent platform loafers",
    price: 45000,
    image: "images/loafers1.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },

   loafers2: {
    name: "Platform chain loafers",
    price: 50000,
    image: "images/loafers2.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },

  loafers3: {
    name: "Taupe Patent Loafers",
    price: 45000,
    image: "images/loafers3.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },

   loafers4: {
    name: "Black suede horsebit loafer ",
    price: 45000,
    image: "images/loafers4.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },

  loafers5: {
    name: " Black patent leather monk strap loafer",
    price: 45000,
    image: "images/loafers5.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },

  loafers9: {
    name: "Classic black leather penny loafer ",
    price: 45000,
    image: "images/loafers9.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },
  loafers8: {
    name: " chunky patent leather tassel loafers",
    price: 45000,
    image: "images/loafers8.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },
   loafers10: {
    name: "Gupper East Black and White Leather Loafers ",
    price: 45000,
    image: "images/loafers10.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },

  loafers11: {
    name: "Oliveria Lan Elegant Black Patent Leather Loafer ",
    price: 45000,
    image: "images/loafers11.jpg",
    description: "Two-tone footwear for a smart, polished look."
  },

  loafers12: {
    name: "Two-Tone Chunky Tassel Loafers ",
    price: 45000,
    image: "images/loafers12.jpeg",
    description: "Two-tone footwear for a smart, polished look."
  },

  women1: {
    name: "Bow Slide ",
    price: 25000,
    image: "images/women1.jpeg",
    description: "Women's Bow slide with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

  women2: {
    name: "H-Band Slide(Women)",
    price: 15000,
    image: "images/women2.jpeg",
    description: "Women's H-strap leather slide with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

  women3: {
    name: "H-Band Slide(Women)",
    price: 15000,
    image: "images/women3.jpg",
    description: "Women's H-strap leather slide with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

  women4: {
    name: "Leather & Transparent Single Strap Slide",
    price: 25000,
    image: "images/women4.jpg",
    description: "Women's Leather & Transparent Single Strap slide with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

  women5: {
    name: "Quilted Women's Sandal",
    price: 25000,
    image: "images/women5.jpg",
    description: "Women's Quilted Sandals with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

   women6: {
    name: "Quilted Women's Sandal",
    price: 25000,
    image: "images/women6.jpg",
    description: "Women's Quilted Sandal with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

   women7: {
    name: "Strappy Block Heel Mule",
    price: 25000,
    image: "images/women7.jpg",
    description: "Women's Strappy Block Heel Mule with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

   women8: {
    name: "Strappy Block Heel Mule",
    price: 25000,
    image: "images/women8.jpg",
    description: "Women's Strappy Block Heel Mule with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

   women12: {
    name: "Strappy Block Heel Mule",
    price: 25000,
    image: "images/women12.jpg",
    description: "Women's Strappy Block Heel Mule with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

   women9: {
    name: "Thin Strap CrissCross Slide",
    price: 25000,
    image: "images/women9.jpg",
    description: "Women's Thin Strap CrissCross Slide with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

   women10: {
    name: "Thin Strap CrissCross Slide",
    price: 25000,
    image: "images/women10.jpg",
    description: "Women's Thin Strap CrissCross slide with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },

   women11: {
    name: "Women's Woven Rope Sandal",
    price: 25000,
    image: "images/women11.jpg",
    description: "Women's Woven Rope Sandal with a cushioned, leather-lined footbed. Handmade to order. EU sizing."
  },
};

const productImage = document.getElementById("product-image");

if (productImage) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products[productId];

  if (product) {
    productImage.src = product.image;
    productImage.alt = product.name;

    document.getElementById("product-name").textContent =
      product.name;

    document.getElementById("product-price").textContent =
      "₦" + product.price.toLocaleString("en-NG");

    document.getElementById("product-description").textContent =
      product.description;
  }
}



const addToCartButton = document.getElementById("add-to-cart");

if (addToCartButton) {
  addToCartButton.addEventListener("click", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = products[productId];

    const size = document.getElementById("product-size").value;
    const colour = document.getElementById("product-colour").value;
    const quantity = Number(
      document.getElementById("product-quantity").value
    );
    const message = document.getElementById("product-message");

    if (!product) {
      message.textContent = "Product not found. Please return to the shop.";
      return;
    }

    if (!size || !colour) {
      message.textContent = "Please select a size and colour.";
      return;
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      message.textContent = "Please enter a valid quantity.";
      return;
    }

    const cart = JSON.parse(localStorage.getItem("eliteCart") || "[]");

    const existingItem = cart.find(item =>
      item.id === productId &&
      item.size === size &&
      item.colour === colour
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        colour: colour,
        quantity: quantity
      });
    }

    localStorage.setItem("eliteCart", JSON.stringify(cart));

    message.textContent = "Added to cart successfully!";
  });
}



const cartItemsContainer = document.getElementById("cart-items");

if (cartItemsContainer) {
  const totalElement = document.getElementById("cart-total");
  const cartMessage = document.getElementById("cart-message");
  const money = amount => "₦" + amount.toLocaleString("en-NG");

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem("eliteCart") || "[]");
    } catch {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem("eliteCart", JSON.stringify(cart));
    renderCart();
  }

  function renderCart() {
    const cart = getCart();
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.textContent = "Your cart is empty.";
      totalElement.textContent = money(0);
      return;
    }

    let total = 0;

    cart.forEach((item, index) => {
      const lineTotal = item.price * item.quantity;
      total += lineTotal;

      const row = document.createElement("div");
      row.className = "cart-item";

      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.name;

      const details = document.createElement("div");
      const name = document.createElement("h3");
      name.textContent = item.name;

      const size = document.createElement("p");
      size.textContent = "Size: " + item.size;

      const colour = document.createElement("p");
      colour.textContent = "Colour: " + item.colour;

      const quantityLabel = document.createElement("label");
      quantityLabel.textContent = "Quantity: ";

      const quantity = document.createElement("input");
      quantity.type = "number";
      quantity.min = "1";
      quantity.step = "1";
      quantity.value = item.quantity;

      quantityLabel.appendChild(quantity);

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-item";
      remove.textContent = "Remove item";

      quantity.addEventListener("change", function () {
        const newQuantity = Number(quantity.value);

        if (!Number.isInteger(newQuantity) || newQuantity < 1) {
          quantity.value = item.quantity;
          return;
        }

        const updatedCart = getCart();
        updatedCart[index].quantity = newQuantity;
        saveCart(updatedCart);
      });

      remove.addEventListener("click", function () {
        const updatedCart = getCart();
        updatedCart.splice(index, 1);
        saveCart(updatedCart);
      });

      details.append(name, size, colour, quantityLabel, remove);

      const price = document.createElement("strong");
      price.className = "item-price";
      price.textContent = money(lineTotal);

      row.append(image, details, price);
      cartItemsContainer.appendChild(row);
    });

    totalElement.textContent = money(total);
  }

  document.getElementById("clear-cart").addEventListener("click", function () {
    localStorage.removeItem("eliteCart");
    renderCart();
    cartMessage.textContent = "Your cart has been cleared.";
  });

  document.getElementById("checkout-button").addEventListener("click", function () {
    const cart = getCart();

    if (cart.length === 0) {
      cartMessage.textContent = "Your cart is empty.";
      return;
    }

    cartMessage.textContent =
      "Your items are ready. Proceed to checkout";
  });

  renderCart();
}



function updateCartCount() {
  const countElement = document.getElementById("cart-count");

  if (!countElement) return;

  let cart = [];

  try {
    cart = JSON.parse(localStorage.getItem("eliteCart") || "[]");
  } catch {
    cart = [];
  }

  const totalItems = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  countElement.textContent = totalItems;
}

updateCartCount();

window.addEventListener("storage", updateCartCount);


// checkout
// CHECKOUT PAGE
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

if (checkoutItems && checkoutTotal) {
  const cart = JSON.parse(localStorage.getItem("eliteCart")) || [];

  if (cart.length === 0) {
    checkoutItems.innerHTML = "<p>Your cart is empty.</p>";
    checkoutTotal.textContent = "₦0";
  } else {
    let total = 0;

    checkoutItems.innerHTML = cart.map(item => {
      const itemTotal = Number(item.price) * Number(item.quantity);
      total += itemTotal;

      return `
        <div class="checkout-item">
          <p><strong>${item.name}</strong></p>
          <p>Size: ${item.size} | Colour: ${item.colour}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Price: ₦${itemTotal.toLocaleString("en-NG")}</p>
        </div>
      `;
    }).join("");

    checkoutTotal.textContent = "₦" + total.toLocaleString("en-NG");
  }
}



// CHECKOUT TO WHATSAPP

const checkoutForm = document.getElementById("checkout-form");
const checkoutMessage = document.getElementById("checkout-message");

if (checkoutForm && checkoutMessage) {
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!checkoutForm.checkValidity()) {
      checkoutForm.reportValidity();
      return;
    }

    const cart = JSON.parse(localStorage.getItem("eliteCart")) || [];

    if (cart.length === 0) {
      checkoutMessage.textContent = "Your cart is empty.";
      return;
    }

    const name = document.getElementById("customer-name").value.trim();
    const email = document.getElementById("customer-email").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const address = document.getElementById("customer-address").value.trim();
    const city = document.getElementById("customer-city").value.trim();

    let total = 0;

    const orderDetails = cart.map(item => {
      const itemTotal = Number(item.price) * Number(item.quantity);
      total += itemTotal;

      return `${item.name}
Size: ${item.size}
Colour: ${item.colour}
Quantity: ${item.quantity}
Price: ₦${itemTotal.toLocaleString("en-NG")}`;
    }).join("\n\n");

    const message = `Hello Elite Footwear, I would like to place an order.

CUSTOMER DETAILS
Name: ${name}
Email: ${email}
Phone: ${phone}
Delivery address: ${address}
City: ${city}

ORDER DETAILS
${orderDetails}

TOTAL: ₦${total.toLocaleString("en-NG")}

Please confirm my order. Thank you!`;

    const whatsappNumber = "2349136032720";
    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;
  });
}

// CONTACT FORM - WHATSAPP

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value;
        const message = document.getElementById("contact-message").value.trim();

        const whatsappMessage = `
Hello Elite Footwear!

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `;

        const whatsappURL = `https://wa.me/2349136032720?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        document.getElementById("contact-status").textContent =
            "Your message is ready on WhatsApp. Please tap Send to deliver it.";

        contactForm.reset();
    });
}

// // menu button

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("#navbar");

if (menuToggle && navbar) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });
}
