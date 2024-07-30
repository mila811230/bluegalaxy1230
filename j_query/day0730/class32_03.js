// const data = [
//   {
//   name : '혼자공부하는 자바스크립트',
//   price : 18000,
//   publisher : '한빛 미디어'
// },{
//   name : 'HTML5 웹 프로그래밍 입문',
//   price : 26000,
//   publisher : '한빛아카데미'
//   }
// ]

// const json = JSON.stringify(data)
// console.log(json)
// console.log(JSON.parse(json))

const num = Math.random()

console.log('#랜덤한 숫자')
console.log('0 - 1 사이의 랜덤한 숫자 :', num)
console.log('')

console.log('#랜덤한 숫자 범위 확대')
console.log('0 ~ 10 사이의 랜덤한 숫자 :', num * 10)
console.log('0 ~ 50 사이의 랜덤한 숫자 :', num * 50)
console.log('')

console.log('#랜덤한 숫자 범위 이동')
console.log('-5 ~ 5 사이의 랜덤한 숫자 :', num * 10 - 5)
console.log('-25 ~ 25 사이의 랜덤한 숫자 :', num * 50 - 25)
console.log('')

console.log('#랜덤한 정수 숫자')
console.log('-5 ~ 5 사이의 랜덤한 정수 숫자 :', Math.floor(num * 10 -5))
console.log('-25 ~ 25 사이의 랜덤한 정수 숫자 :', Math.floor(num * 50 -25))
console.log('')
