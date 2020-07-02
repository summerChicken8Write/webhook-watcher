const { execSync } = require('child_process')
const express = require('express')

const app = express()

const PORT = 2333
const HOST = '0.0.0.0'

let stack = []

app.get('/', (req, res) => {
  //校验身份
  let role = false
  console.log('校验身份');
  role = true
  if (!role) {
    return
  }

  let info  = req

  if (stack.length === 0) {
    // 任务入栈
    stack.push(info)

    console.log('执行构建代码');
    execSync('ls')
    
    // 任务出栈
    stack = []
  } else {
    console.log('有任务正在执行');
  }


  res.status(200)
  res.send('It is ok')
})

app.listen(PORT, HOST)

console.log(`webhook serve is runing on http://${HOST}:${PORT}`)