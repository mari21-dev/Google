// дожидаемся загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
  
  // получаем доступ к необходимым элементам пользовательского интерфейса
  const btnSearch = document.querySelector("#btn-search");
  const inputGoogleSearch = document.querySelector("#input-google-search");
  const btnLucky = document.querySelector("#btn-lucky");

  // слушаем нажатие на Enter
  inputGoogleSearch.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      if (inputGoogleSearch.value != "") {
        window.location.href =
          "https://www.google.ru/search?&rls=ru&q=" + inputGoogleSearch.value;
      } else {
        alert("Вы ничего не ввели");
      }
    }
  });

  // слушаем нажатие на кнопку "поиска"
  btnSearch.addEventListener("click", function (event) {
    if (inputGoogleSearch.value != "") {
      window.location.href =
        "https://www.google.ru/search?&rls=ru&q=" + inputGoogleSearch.value;
    } else {
      alert("Вы ничего не ввели");
    }
    console.log(event);
  });

  // слушаем нажатие на кнопку "мне повезёт"
  btnLucky.addEventListener("click", function () {
    window.location.href = "https://www.google.com/doodles/";
  });
});
