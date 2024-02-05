const express = require('express')
const app = express()
const port = 3000

// semua endpointnya kita pindahkan ke dalam routes, dan tambahin ini:
const route = require('./routes')
app.use(route)

// menjalankannya
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})