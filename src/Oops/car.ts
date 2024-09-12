

class car{

    public  drivingseat(){
        console.log("drivingseat");
    }
    public  stearing(){
        console.log("stearing");
    }
    public  test3(){
        console.log("test3");
    }
}

class NewCar extends car{

    public test(){
        this.drivingseat();
    }
}

let newcar:car = new NewCar();

// create your own classes and make inheritance
//create object for child and assign to child
//create object for parent and assign to parent
//create object for parent and assign to child
//create object for child and assign to parent
