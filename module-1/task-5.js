// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов



const countryChina = "Китай";
const priceChina = 100;

const countryChile = "Чили";
const priceChile = 250;

const countryAustralia = "Австралия";
const priceAustralia = 170;

const countryIndia = "Индия";
const priceIndia = 80;

const countryJamaica = "Ямайка";
const priceJamaica = 120 ;

let userInput = prompt("Delivery");

switch(userInput.toLowerCase()) {
  case countryChina.toLowerCase():
      alert(" Доставка в " + countryChina + " будет стоить " + priceChina + " кредитов ");
      break;

  case countryChile.toLowerCase():
      alert(" Доставка в " + countryChile + " будет стоить " + priceChile + " кредитов ");
      break;

  case countryAustralia.toLowerCase():
      alert(" Доставка в " + countryAustralia + " будет стоить " + priceAustralia + " кредитов ");
      break;
      

  case countryIndia.toLowerCase():
      alert(" Доставка в " + countryIndia + " будет стоить " + priceIndia + " кредитов ");
      break;
      

  case countryJamaica.toLowerCase():
      alert(" Доставка в " + countryJamaica + " будет стоить " + priceJamaica + " кредитов ");
      break;
      

      default:
        alert(" В вашей стране доставка не доступна ");
}
