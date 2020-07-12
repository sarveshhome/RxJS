import { Observable, Subject } from 'rxjs';

//source notfiying all its consumer whenever it is updated
let Product={
    Title:'Book',
    Price:200
}

let Product$ = new Subject<any>();

let UpdatePrice = 300;

let btnDisplay = document.getElementById('displayBtn');
let btnUpdate = document.getElementById('updateBtn');
let consumer1div = document.getElementById('pdiv1');
let consumer2div = document.getElementById('pdiv2');

//consumer
consumer1div.innerHTML = JSON.stringify(Product);
consumer2div.innerHTML = JSON.stringify(Product);

Product$.subscribe((data)=>{
    consumer1div.innerHTML = JSON.stringify(data);
    consumer2div.innerHTML = JSON.stringify(data);
});

btnUpdate.addEventListener('click',()=>{
     UpdatePrice = UpdatePrice + 100;
     Product.Price = UpdatePrice;
     Product$.next(Product);
     console.log(Product);
});


btnDisplay.addEventListener('click',()=>{
    // consumer1div.innerHTML = JSON.stringify(Product);
    //consumer2div.innerHTML = JSON.stringify(Product);    
});


var observable = Observable.create((observer: any) => {
    observer.next('Hello World');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye');
});

observable.subscribe(
    (x:any) => logItem(x),
    (error: any) => logItem('Error: ' + error),
    () => logItem('Completed')
);

function logItem(val:any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}