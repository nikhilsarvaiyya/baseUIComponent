import { faker } from '@faker-js/faker';
let product = ['Mobile', 'Water Bottle', 'Wrist Watch','Laptop','Headphone','Pen Stand','Coconut Oil','Monitor',
'Wooden Table','Mobile Stand','Wireless Mouse','Extendion Box','Pen drive','Hdmi Cable','Sofa cum Bed','White Board',
'Celing Fan','RR Switch'];
let brand = ['Adidas','puma','Rebbok','Camline','cello','Nokia','Samsung','Poly','Acer','Asus','Lenovo','Fast track']
let fakeVarient = []
for (let index = 0; index < 3; index++) {

    let fakeSku = []

    for (let j = 0; j < 5; j++) {
       fakeSku.push({ 
            size: faker.helpers.arrayElement(['xxs','xs','s', 'm', 'l','xl','xxl','3xl','4xl']), 
            inStock: faker.helpers.arrayElement([true,false]),  
            quantity : faker.helpers.arrayElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
        })
    }

    fakeVarient.push({
        color: faker.helpers.arrayElement(['red', 'green', 'blue','yellow','orange','black','white','purple']),
        skus: fakeSku
    })
}

let SeedProduct = {
    image: faker.image.avatar(),
    name: faker.helpers.arrayElement(product),
    brand: faker.helpers.arrayElement(brand),
    desc: faker.lorem.paragraphs(),
    price: faker.datatype.float({ min: 1, max: 10000, precision: 0.01 }),
    variants: fakeVarient
}


export default SeedProduct
