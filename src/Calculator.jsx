

// let a=56;
// let b=6;

// let sum=a+b;
// let mul=a*b;
// let sub=a-b;
// let dib = a/b;
function sum(a,b){
   let fig=a+b;
    return fig;
}
function sub(a,b){
   let tig=a-b;
    return tig;
}
function mul(a,b){
   let tot=a*b;
    return tot;
}
function dibs(a,b){
   let gif=a/b;
   gif = gif.toFixed(2);
    return gif;
}

export default sum;
export {sub,mul,dibs};