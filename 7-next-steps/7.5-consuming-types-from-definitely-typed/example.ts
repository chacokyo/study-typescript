// DefinitelyTyped에 별도의 타입이 있는 NPM 패키지 사용하기
// pluraize 라이브러리는 전달된 영단어를 복수형으로 만들어 줍니다.
// bun 환경
// import { plural } from 'pluralize'

// const pluraization = plural('Library')
// //    ^?

// console.log(pluraization) // 출력: "libraries"

// node 환경
import pluralize from 'pluralize'

const { singular } = pluralize

const singularization = singular('hamsters')
console.log(singularization)
