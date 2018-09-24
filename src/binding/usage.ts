const { LocalBinding } = require('./binding')

const instance = new LocalBinding();

(async () => {
  const response = await instance.query.hello()
  console.log(response)
})()