let n = 1500450271;
let cnt = 1;
let div = 0;

while(cnt <= n){
    if(n % cnt === 0){
        div++;
    }
    cnt++;
}
if(div === 2){
    console.log(`Sim, o número ${n} é primo!`)
}else{
    console.log(`Não, o número ${n} não é primo!`)
}
