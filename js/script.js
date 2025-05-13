const userCard = document.getElementById("userCard");
const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";
//////////OVERLAY//////////////////
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close-overlay");

axios.get(apiUrl).then(function (resp) {
  const arrayImg = resp.data;
// CICLO FOR PER LE CARD //
  for (let i = 0; i < arrayImg.length; i++) {
    const img = arrayImg[i];
// CREO LE CARD //
    const card = `
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="card h-100 p-4">
          <img src="./img/pin.svg" class="pin" alt="">
          <img src="${img.url}" class="card-img-top clickable-img" alt="${img.title}">
          <div class="card-body">
            <p class="card-text">${img.title}</p>
            <p class="card-text">${img.date}</p>
          </div>
        </div>
      </div>`;

    userCard.innerHTML += card;
  }

  document.querySelectorAll(".clickable-img").forEach(function (imgEl) {
    imgEl.addEventListener("click", function () {
      const imgSrc = imgEl.getAttribute("src");
      overlayImg.setAttribute("src", imgSrc);
      overlay.classList.remove("overlay-hidden");
    });
  });
});

closeBtn.addEventListener("click", function () {
  overlay.classList.add("overlay-hidden"); 
});
