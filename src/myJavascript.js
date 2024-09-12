function a(){
    ab=100;
    console.log('welcome to function a'+ab);
}
function b(){
    setTimeout(() => {
        console.log('welcome to function b'+cfd);
    }, 1000);
}
function c(){
    console.log('welcome to function c');
    setTimeout(() => {
        console.log('welcome to function b');
    }, 500);
}

console.log('welcome to javascript');


c();
var ab=10;
a();
b();

// asynchronous
// synchronus