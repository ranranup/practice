
var arr = [1,2,3,4,5,2,3];
/*var arr = ["ww","name","ww","test","ranran","ranran",123,"123",123];*/
var result = []; //定义一个空的数组，用来保存处理后的数据

/*
    方法一：
    isMatch方法用来判断n是否在新数组中已存在，存在的话返回true，否则返回false；
    unique方法用来遍历需要处理的数组，查看其在新数组中是否存在，如果不存在就保存在result中
    无法区分"123"和123
*/
function isMatch(array, n) {
    for(var i=0;i<array.length;i++) {
        if(array[i] === n) {
            return true;
        }
    }
    return false;
};

function unique1(array) {
    for(var i=0;i<array.length;i++) {
        if(!isMatch(result, array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

console.log(unique1(arr));

/*
    方法二：
    使用indexOf()函数，如果不存在则返回-1
    无法区分"123"和123
*/

function unique2(array) {
    for(var i=0; i<array.length; i++) {
        if(result.indexOf(array[i]) == -1) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(unique2(arr));



/*
    方法三：
    将数组元素转为对象的 key，key不能重复
    可以区分"123"和123
*/
function unqiue3(array){
    var cache=[];
    var myresult=[];
    //将数组元素转为对象的 key
    for(var i=0;i<array.length;i++){
        cache[array[i]]=i;
    };

    //存储 key(实际的数组元素)
    for(key in cache){
        myresult.push(key);
    };

    return myresult;
}

console.log(unqiue3(arr));
