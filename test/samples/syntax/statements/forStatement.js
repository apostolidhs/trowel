for(;;);
for(1;2;3){}
for(var i=0; i<10; ++i);
for(var i=0, len = arr.length; i<len; ++i){
	console.log(arr[i]);
	for(;;)console.log(arr[len-i]);
}
for(i in [1,2,3]);