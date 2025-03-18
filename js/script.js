
for(let i = 1; i<=100;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`il numero ${i} e' multiplo sia per 3  che per 5 (FIZZBUZZ)`)
    }
       else if(i % 5 === 0){
        console.log(`il numero ${i} e' multiplo di 5 (BUZZ)`)
    }
    else if(i % 3 === 0){
        console.log(`il numero ${i} e' multiplo di 3 (FIZZ)`)
    }
    else{
        console.log(i)
    }
}