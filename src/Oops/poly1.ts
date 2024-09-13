interface animal{
    eat():void;
    run():void;
    hunt():void;
}

abstract class lion implements animal{
    eat(): void {
        console.log('lion eating..');
     }
    run(): void {
        console.log('lion running..');
    }
    hunt(): void {
        console.log('lion hunting..');
    }
    sleep():void{
        console.log('lion sleeping..');
    }
    
}
class liona extends lion{
    eat(): void {
       console.log('lion eating..');
    }
    
    
}
class cheta implements animal{
    eat(): void {
        console.log('cheta eating..');
    }
    run(): void {
        console.log('Cheta is running');
    }
    hunt(): void {
        throw new Error("cheta is hunting..");
    }
    
}

let ch:liona = new liona();
ch.sleep();



// pen
//     writing()
//     otheruser()

// abstractclass 
//     writing();
//     anstract otheruser()

// renolds class abstractclass
// writing();
// otheruser()