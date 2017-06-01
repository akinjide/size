const size = require('./');

size({
  bytes: 330307828,
  decimals: 1
}).then(console.log)
  .catch(console.error)

size({
  bytes: 1157970
}, (err, resp) => {
  if (err) {
    console.log(err)
  }

  console.log(`Total size: ${resp}`)
})