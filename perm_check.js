let min = 0, max = 0, i = 0, j = 0, x = 0, y = 0, input_string = 0, reply = 0;
let a = [0], total=[0];
let btn1 = document.getElementsByTagName("button")[0];

function solution(a){

    j = a[0];

    for(i=0; i<a.length; i++){
        if(j !== a[i]){
            return 0;
            break;
        }
        j++;
    }
    return 1;
}

btn1.addEventListener('click', function( event ){
    input_string = document.getElementsByTagName("input")[0].value;
    a = input_string.split(",");

    for(i=0; i<a.length; i++){
        a[i] = parseInt(a[i]);
    }

    function sortNumber(x,y){
        return x - y;
    }
    a.sort(sortNumber);
    a.join(",");

    document.getElementsByTagName("p")[0].innerHTML = "a = "+ a;
    reply = solution(a);
    if(reply === 1){
        document.getElementsByTagName("p")[1].innerHTML = "Array is a Permutation";
    }
    else{
        document.getElementsByTagName("p")[1].innerHTML = "Array is not a Permutation";
    }
    
});