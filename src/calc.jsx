
function add(a,b){
    return a+b;
}
function sub( a, b){
    return a-b;
}
function mult(a, b){
    return a*b;
}
function div(a, b){
    var res=a/b;
    res=res.toFixed(24);
    return res;
}
export default add;
export {sub};
export {mult};
export {div};
