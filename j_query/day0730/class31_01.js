// setTimeout(() =>{
//   console.log('1초후 실행')
// }, 1000)

// let count = 0
// setInterval(() => {
//   console.log(`1초마다 실행(${count})`)
//   count++
// }, 1000)

let id
let count = 0
id = setInterval(() =>{
  console.log(`2초마다 실행(${count}번째)`)
  count++
}, 2000)

setTimeout(() => {
  console.log('타이머를 종료')
  clearInterval(id)
}, 8000)