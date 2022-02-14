/* const {zenroom_exec} = require("zenroom");
const script = `print("Hello World!")`
zenroom_exec(script).then(({result}) => console.log(result)) //=> "Hello World!" */

const { zencode_exec } = require('zenroom')

const smartContract = `Given that I have a 'string' named 'hello'
                       Then print all data as 'string'`
const data = JSON.stringify({ hello: 'world!' })
const conf = 'memmanager=lw'

zencode_exec(smartContract, { data, conf }).then(({ result }) => {
  console.log(result) // {"hello":"world!"}
})