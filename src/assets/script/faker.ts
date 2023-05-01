import { faker } from '@faker-js/faker';
import codeObj from './codeData';


let fakeData: any = []

for (let i = 0; i < 10; i++) {
    let generatData = {
        id: i + 1,
        pKey: faker.helpers.arrayElement(['spinner', 'card', 'table']),
        path: faker.helpers.arrayElement(['spinners', 'cards', 'tables']),
        title: faker.name.jobType(),
        icon: faker.name.fullName(),
        data: codeObj.filter((f : any) => f.type = faker.helpers.arrayElement(['spinner', 'card', 'table']))
    }

    fakeData.push(generatData)
}

export default fakeData
