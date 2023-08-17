// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for(a of dairy){
        console.log(a)
    }
}
// Task 2
function birdCan() {
    const animal = {
      canJump: true
    };
  
    const bird = Object.create(animal);
  
    bird.canFly = true;
  
    bird.hasFeathers = true;
  
    for (prop of Object.keys(bird)) {
      console.log(prop + ":" + " " + bird[prop])
    }
  }
  birdCan();




// Task 3
function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;
    
    for (const prop in bird) {
        console.log(prop + ":" + " " + bird[prop]);
    }
}

    animalCan();