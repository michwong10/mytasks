let to_do_items = [
    { task: `meal prep`, time: 18.00, complete: 100, done:true }, //0 
   
    { task: `laundry`, time: 15.00, complete: 40, done:false }, //1

    { task: `Web Design`, time: 9.00, complete: 50, done:false  }, //2

    { task: `check emails`, time: 23.00, complete: 100, done:true }, //3 
   
    { task: `complete readings`, time: 10.00, complete: 80, done:false } //4

];

let alltasks = document.getElementById('to_do_items')
let msgElement = document.getElementById('msg')

let to_do_items = 'pending';

if (to_do_items = 100) {
    msgElement.innerHTML = `Complete`
  }
  else if (to_do_items < 100) {
    msgElement.innerHTML = `Not Complete`
  }
 