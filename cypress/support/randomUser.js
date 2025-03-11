const { faker } = require('@faker-js/faker')

module.exports = {
  generateRandomUser: () => {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone_number: `8${faker.string.numeric(10)}`,
      company_name: faker.company.name(),
      questions: faker.lorem.sentence()
    }
  }
}