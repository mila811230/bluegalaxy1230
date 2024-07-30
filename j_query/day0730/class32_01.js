// const produce = {
//   제품명 : '건조망고',
//   유형 : '당절임',
//   성분 : '망고, 설탕, 메타중아황산나트륨, 치자황색소', 
//   원산지 : '필리핀'
// }
// produce.성분
// produce.원산지

// const obj = {
//   number : 273,
//   string : '구름',
//   boolean : true,
//   array : [52, 273, 103, 32],

//   method : function(){}
// }
// obj.method

// const pet = {
//   name : '구름',
//   eat : function(food){
//   alert(this.name + '은' + food + '를 먹습니다')
//   }
// }
// pet.eat('씨리얼')


// const stu = {}
// stu.name = '왕왕'
// stu.hobby = '날라차기'
// stu.wannabe = '선수'

// console.log(JSON.stringify(stu, null, 2))


// const stu = {}
// stu.name = '왕왕'
// stu.hobby = '날라차기'
// stu.wannabe = '선수'
// delete stu.wannabe

// console.log(JSON.stringify(stu, null, 1))

// const pet = {
//   name : '구름',
//   eat(food) {
//     alert(this.name + '이는 ' + food + '을 먹습니다')
//   }
// }
// pet.eat('씨리얼')

// const tes = {
//   a: function(){
//     console.log(this)
//   },
//   b: () => {
//     console.log(this)
//   }
// }
// tes.a()
// tes.b()

// Number.prototype.sample = 10

// Number.prototype.power = function(n = 2){
//   //n = 2는 2제곱을 뜻함
//   return this.valueOf() ** n
// }
// const a = 12
// // a는 제곱을 할 숫자를 변수로 12를 지정함
// console.log('a.power() :', a.power())
// console.log('a.power(3) :', a.power(3))
// // power = function(n = 2){}의 값을 n = 3으로 치환해서 3제곱으로 바꿔줌
// console.log('a.power(4) :', a.power(4))


String.prototype.contain = function(data){
  return this.indexOf(data) >= 0
}

Array.prototype.contain = function(data){
  return this.indexOf(data) >= 0
}

const a = '안녕하세요'
console.log('안녕 in 안녕하세요 : ', a.contain('안녕'))
console.log('없는데 in 안녕하세요 : ', a.contain('없는데'))

const b = [273, 32, 103, 57, 52]
console.log('273 in [273, 32, 103, 57, 52] : ', b.contain(273))
console.log('0 in [273, 32, 103, 57, 52] : ', b.contain(0))

const l = 123.456789
l.toFixed(3)

let input = `
일자, 달러, 엔, 유로
02, 1141.8, 1097.46, 1262.37
03, 1141.8, 1097.46, 1262.37
04, 1141.8, 1097.46, 1262.37
05, 1141.8, 1097.46, 1262.37
06, 1141.8, 1097.46, 1262.37`


