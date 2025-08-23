// --------------------------------------------------------------------------
// ✅ TypeScript의 클래스 게터와 세터
// --------------------------------------------------------------------------

// 문제
// BankAccount 클래스를 만들고, number 타입의 private 프로퍼티 balance를 추가하세요.
// balance에 접근하고 수정할 수 있도록 게터(getBalance)와 세터(setBalance)를 구현하세요.
// balance는 음수로 설정될 수 없도록 하세요.

class BankCount {
  private _balance: number

  constructor(balance: number) {
    this._balance = balance
  }

  get balance() {
    return this._balance
  }

  set balance(value) {
    if (value > 0) this._balance = value
  }
}

const hamster = new BankCount(10)
hamster.balance = 14
hamster.balance = -1

console.log(hamster.balance)
