var hello = "Hello World";
alert(hello);

var int1 = 1;

// 整数を代入する
var int1 = 1;

// 負数を代入する
var int2 = -10;

// 小数点を代入する
var float1 = 3.14;

// 文字列を代入する
var str1 = 'JavaScriptを覚えよう';

alert(4 + 3);

// 足し算
alert(4 + 3);

// 引き算
alert(8 - 5);

// 掛け算
alert(2 * 6);

// 割り算
alert(10 / 2);

alert('Hello' + 'World');

var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

// While文は、条件式が真（true）ならば制限なく繰り返します。
// for文は、決められた回数だけ繰り返します。

var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われます。

// do{
//   最低1回は行われる処理
// }while(条件式);

// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }

var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');