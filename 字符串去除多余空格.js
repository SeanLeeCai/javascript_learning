/*
 *使用正则,但中间多余空格未处理
　　 function trim(str){ //删除左右两端的空格
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
　　 }
　　 function ltrim(str){ //删除左边的空格
　　     return str.replace(/(^\s*)/g,"");
　　 }
　　 function rtrim(str){ //删除右边的空格
　　     return str.replace(/(\s*$)/g,"");
　　 }
*/
/*
 *不使用正则去除首尾和中间多余空格
*/
function trim(str) {
    var arr = str.split(" ");
    var newArr = [];
    var p = 0;
    arr.forEach(function(item) {
	if (item) {
	    newArr[p++]=item;
	}
    });
    str = newArr.join(" ");
    return str;
}
