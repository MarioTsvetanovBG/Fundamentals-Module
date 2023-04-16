function employees(list) {
    // "Name: {employeeName} -- Personal Number: {personalNum}" 
    let newObj = {};
    list.forEach(name => {
        newObj[name] = name.length;
    });
    for (const key in newObj) {
        console.log(`Name: ${key} -- Personal Number: ${newObj[key]}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)


function towns(array) {
    //desired ouput: { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
    let newObj = {};
    for (const line of array) {
        let [town, latitude, longitude] = line.split(' | ')
        newObj.town = town;
        newObj.latitude = Number(latitude).toFixed(2);
        newObj.longitude = Number(longitude).toFixed(2);
        console.log(newObj)
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)




function storeProvision(currentStock, orderedProducts) {
    //ouput:  (product -> quantity)
    const newObj = {};
    for (let index = 0; index < currentStock.length; index += 2) {
        let product = currentStock[index];
        let quantity = Number(currentStock[index + 1]);
        newObj[product] = quantity;
    }
    for (let index = 0; index < orderedProducts.length; index += 2) {
        let product = orderedProducts[index];
        let quantity = Number(orderedProducts[index + 1]);

        //ако в обекта, в който вкарахме всички данни от първия масив, няма съотвения продукт, го добави със стойност 0
        if (!newObj.hasOwnProperty(product)) {
            newObj[product] = 0;
        }
        //Независмио дали го е имало или не.(ако го е имало, ще добави допълнително). Ако не го е имало ще добави стойноста към 0
        newObj[product] += quantity;
    }

    for (const element of Object.keys(newObj)) {
        console.log(`${element} -> ${newObj[element]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)