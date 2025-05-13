const userCard = document.getElementById("userCard");

const apiUrl = "https://lanciweb.github.io/demo/api/pictures/"
axios
  .get(apiUrl)
  .then(function (resp) {
    const arrayImg = resp.data;

    for (let i = 0; i < arrayImg.length; i++) {
      const img = arrayImg[i];
      console.log(img);

      const card = `<div class="col-md-4 col-sm-6 mb-4">
          <div class="card h-100 p-4">
            <img src="./img/pin.svg" class="pin" alt="">
            <img src="${img.url}" class="card-img-top" alt="${img.title}">
            <div class="card-body">
              <p class="card-text">${img.title}</p>
              <p class="card-text">${img.date}</p>
            </div>
          </div>
        </div>
        `;
      userCard.innerHTML += card;
    }
  })
  .catch(function (error) {
    console.error("Errore nella chiamata API:", error);
  });
