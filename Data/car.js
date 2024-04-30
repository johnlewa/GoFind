

export let car = JSON.parse(localStorage.getItem('car'));

if (!car) {
  car = [{
    carId: 'jnbgjnbjn',
    quantity: 1
  }];
}


function saveToStorage() {
  localStorage.setItem('car', JSON.stringify(car));
}


export function addToCarList(carId) {
  let matchingItem;

  car.forEach((item) => {
      if (carId === item.carId) {
          matchingItem = item;
      }
  });

  if(matchingItem) {
      matchingItem.quantity += 1;
  } else {
      car.push({
          carId: carId,
          quantity: 1
      });
  }
  saveToStorage();
}

export function removeFromList (carId) {
  const newCar = [];

  car.forEach((Item) => {
    if (Item.carId !== carId) {
      newCar.push(Item);
    }
  });

  car = newCar;

  saveToStorage();
}