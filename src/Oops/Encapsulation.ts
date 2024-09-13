//BankMember.ts
export default class BankMember {
    
    private _savingsBalance: number;

    public get savingsBalance(): number{
        return this._savingsBalance;
    }

    public set savingsBalance(v: number) {
        this._savingsBalance = v;
    }
    

    constructor(savingsBalance: number) {
        this._savingsBalance = savingsBalance;
    }

    public deposit(amount: number): void {
        this._savingsBalance += amount;
    }
    private deposit1(amount: number): void {
        this._savingsBalance += amount;
    }
    public withdraw(amount: number): void {
        this.deposit1(5);
        if(this.savingsBalance < amount){
            console.log("Insufficient Funds");
            return;
        }

        this._savingsBalance -= amount;

    }

}

class test extends BankMember{

    constructor(savi:number){
        super(savi);
    }

    public testa(){
    }
}

let bankmember:BankMember = new BankMember(10);
console.log(bankmember.savingsBalance);
bankmember.