// let fff
// fff = function(){
//   console.log('첫번째 익명함수')
// }
// fff = function(){
//   console.log('두번째 익명함수')
// }
// fff()


// fff()

// function fff(){
//   console.log('1번째 선언적 함수')
// }

// function fff(){
//   console.log('2번째 선언적 함수')
// }

// fff = function(){
//   console.log('익명함수')
// }

// function fff(){
//   console.log('선언적 함수')
// }

// fff()

// let nums = [273, 25, 75, 52, 103, 32, 57, 24, 76]
// nums = nums.filter((value) => value % 2 === 1)
// nums = nums.filter((value) => value < 100)
// nums = nums.filter((value) => value % 5 === 0)

// console.log(nums) 
              
// const ary = ['사과','오렌지','귤','배']
// console.log('#for in 반복문')
// for (const i in ary){
//     console.log(i)
//   }
  
//   console.log('# for of 반복문')
//   for (const i of ary){
//       console.log(i)
//     }


  const ary = ['사과','오렌지','귤','배']

  console.log('#for in 반복문') 
  ary.forEach((value, i) => {
    console.log(i)
  })

  console.log('# for of 반복문')
  ary.forEach((value, i) => {
    console.log(value)
  })

