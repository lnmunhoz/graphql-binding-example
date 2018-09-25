const { LocalBinding } = require('../src/binding/binding')

const instance = new LocalBinding();

(async () => {
  const response = await instance.query.hello()
  console.log('Response from binding query:', response)
})()