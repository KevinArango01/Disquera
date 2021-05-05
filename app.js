const { app } = require('./lib/infrastructure/webServer/Server')

const port = 3000

app.listen(port, () => console.log(`Listening on: http://localhost:${port}`))