"user strict";
// dyamic scroll up button (appears when scroll height is more then 20% of page height)
function scrollUp() {
  const scrollStep = -window.scrollY / (500 / 10);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

//this function prevents scroll when burger menu is opened
const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    if (window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", preventScroll);
    }
  } else {
    if (window.innerWidth < 768) {
      document.body.style.overflow = "auto";
      document.removeEventListener("wheel", preventScroll);
    }
  }
});
function preventScroll(e) {
  e.preventDefault();
}
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    document.body.style.overflow = "auto";
    document.removeEventListener("wheel", preventScroll);
    checkbox.checked = false;
  } else {
    if (checkbox.checked) {
      document.body.style.overflow = "hidden";
      document.addEventListener("wheel", preventScroll);
    }
  }
});

//pricing page function to change price from month to year and back
const annual = document.getElementById("annual_type");
const annual1 = document.getElementById("annual1");
const annual2 = document.getElementById("annual2");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
function change() {
  if (annual.checked) {
    annual1.classList.remove("choosed");
    annual2.classList.add("choosed");
    price1.innerHTML = "$190.00";
    price2.innerHTML = "$390.00";
    price3.innerHTML = "$990.00";
  } else {
    annual1.classList.add("choosed");
    annual2.classList.remove("choosed");
    price1.innerHTML = "$19.00";
    price2.innerHTML = "$39.00";
    price3.innerHTML = "$99.00";
  }
}
const fixedButton = document.getElementById("fixed-button");
const pageHeight = document.documentElement.scrollHeight;
const scrollThreshold = pageHeight * 0.2;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > scrollThreshold) {
    fixedButton.style.display = "block";
  } else {
    fixedButton.style.display = "none";
  }
});
