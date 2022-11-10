const express = require('express')
const { routerProductos } = require('./routers/routerProductos')

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', routerProductos)

const server = app.listen(8080, () => {
  console.log(`conectado y escuchando en puerto ${server.address().port}`)
})