// console.log(123)

// const regexp = new RegExp('the', '')
// console.log(str.match(regexp))

let str = `
010-1234-5678
thejeon0303@naver.com
https://www.omdbapi.com/?apikey=7035c60c$s=frozen 
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// const regexp = /the/gi
// console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)

const h = `  the hello  world  !

`

console.log(
    h.replace(/\s/g, '')
    )