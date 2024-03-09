const numeros = [5,7,1,3,2,8,6,7,10,9,1,20,30,1,3,5];
function par(){
    const pares=numeros.filter((n)=>n%2==0)
    return pares
}
function impar(){
    const impares=numeros.filter((n)=>n%2!=0)
    return impares
}
function nunmayor(){
    let maxx=Math.max(...numeros)
    return maxx
}
function nunmenor(){
    let minn=Math.min(...numeros)
    return minn
}
console.log(par())
console.log(impar())
console.log(nunmayor())
console.log(nunmenor())
