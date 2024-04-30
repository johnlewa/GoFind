import { car, removeFromList } from "../Data/car.js";
import { cars } from "../Data/carDetails.js";

let carSummaryHTML = '';

car.forEach((Item) => {
    const carId = Item.carId

    let matchingItem;

    cars.forEach((car) => {
        if (car.id === carId) {
            matchingItem = car;
        }
    });

  
    carSummaryHTML += `
        <div class="car js-car-container-${matchingItem.id}">
            <img src="${matchingItem.image}">
            <h3>
              ${matchingItem.name}
            </h3>
            <p>
              $${matchingItem.price}
            </p>

            <div>
                Selected: ${Item.quantity}
            </div>
        
            <button class="js-remove-car-button" data-car-id="${matchingItem.id}">
                Remove Car
            </button>
            
        </div>
       
    `;
});

console.log(carSummaryHTML);

document.querySelector('.js-checkout-container').innerHTML = carSummaryHTML;

document.querySelectorAll('.js-remove-car-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const carId = button.dataset.carId;
            removeFromList(carId);
            
            const container = document.querySelector(`.js-car-container-${carId}`);
            container.remove();
        });
    });