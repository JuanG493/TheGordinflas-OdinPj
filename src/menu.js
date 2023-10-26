

export const mkMenuPage = (frame) => {

    frame.innerHTML = '';

    const menuesite = {
        appetizers: {
            'Smoked Chicken Wings': {
                description: 'served with your choice of sauce - BBQ, hot, or sweet chili.',
                price: 10
            },
            'Fried Pickles': {
                description: 'crispy breaded dill pickles served with ranch dressing.',
                price: 10
            },
            'Brisket Nachos': {
                description: 'crispy tortilla chips topped with smoked brisket, melted cheese, jalapeños, and sour cream.',
                price: 10
            }
        },
        entrees: {
            'Pulled Pork Sandwich': {
                description: 'slow-smoked pork shoulder served on a brioche bun with coleslaw and pickles.',
                price: 15
            },
            'Beef Ribs': {
                description: 'tender and juicy beef ribs smoked to perfection and served with your choice of sauce.',
                price: 20
            },
            'Smoked Sausage Platter': {
                description: 'a selection of our house-made smoked sausages served with a side of mac and cheese and baked beans.',
                price: 18
            }
        },
        sides: {
            'Mac and Cheese': {
                description: 'creamy and cheesy comfort food that pairs perfectly with any BBQ dish.',
                price: 5
            },
            'Baked Beans': {
                description: 'slow-cooked with bacon and spices for a rich and savory flavor.',
                price: 4
            }
        }
    };

let menu = '<div>';

for (let key in menuesite) {
   menu += `<h2>${key}</h2>`
    for (let elm in menuesite[key]){
        // console.log(Object.keys(menuesite[key]).indexOf(elm));
        menu += `<div>
                  <br>
                  <h3>${elm}</h3>
                  <br>
                  <div class='testing'>
                    <p>${menuesite[key][elm].description}</p>
                    <div 
                     class='${key}${Object.keys(menuesite[key]).indexOf(elm)}'
                     data-price='$${menuesite[key][elm].price}'></div>
                  </div>`


    }
}
frame.innerHTML = menu + '</div>'

}


