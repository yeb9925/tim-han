const express = require('express')
const app = express()
const { PORT, MODE } = require('./config')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

// Logging Middleware
app.use(morgan(MODE))

// Body-parsing Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Static-File Serving Middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// Sends blogs.html
app.use('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/blogs.html'))
});

// Sends blogs.html
app.use('/blogs.html', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/blogs.html'))
});

// Sends index.html
app.use('/:param', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/404.html'))
});

// Sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});

app.listen(PORT, () => {
  console.log(`Server now listening on port: ${PORT}`)
})
