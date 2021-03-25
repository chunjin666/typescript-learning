type Fish = {
  swim: Function
}
type Bird = {
  fly: Function
}

//  类型断言的形式为： parameterName is Type
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet(): Fish | Bird {
  return Math.random() > 0.5 ? { swim: () => {} } : { fly: () => {} }
}

let smallPet = getSmallPet();

if (isFish(smallPet)) {
  // 变成了 Fish
  smallPet.swim();
} else {
  smallPet.fly();
}