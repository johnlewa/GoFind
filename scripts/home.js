import { car, addToCarList } from "../Data/car.js";
import { cars } from "../Data/carDetails.js";

let carsHTML = '';

cars.forEach((car) => {
  carsHTML += `
    <div class="car">
      <img src="${car.image}">
      <h3>
        ${car.name}
      </h3>
      <p>
        $${car.price}
      </p>
    
      <button class="buy-button js-buy-button" data-price="20000" data-car-id="${car.id}">
        
        Buy Now
      </button>
      
    </div>
  `;
  
});

function updateCarListQuantity() {
  let carQuantity = 0;

  car.forEach((Item) => {
    carQuantity += Item.quantity;
  });

  document.querySelector('.js-car-quantity').
    innerHTML = carQuantity;
}

updateCarListQuantity();

document.querySelector('.js-car-listings').innerHTML = carsHTML;

document.querySelectorAll('.js-buy-button').
    forEach((button) => {
        button.addEventListener('click', () => {
           const carId = button.dataset.carId
            
           addToCarList(carId);
           updateCarListQuantity();
        });
    });