//1,Promise是一个构造函数，既然是构造函数，那么，我们就可以new Promise()得到一个Promise实例；

//2,在Promise上，有两个函数，分别叫做resolve（成功之后的回调函数），reject（失败之后的回调函数）

//3,在Promise构造函数的Prototype属性上，有一个.then()方法，只要Promise创建的实例，都可以使用

//4,Promise表示一个异步操作，每当我们new一个Promise实例，都表示一个具体的异步操作

//5,既然Promise创建的实例，是一个异步操作，那么这个异步操作的结果只有两种状态
//   5.1 状态1：异步执行成功，需要在内部调用成功的回调函数，resolve把结果返回给调用者
//   5.2 状态2：异步执行失败，需要在内部调用失败的回调函数，reject把结果返回给调用则
//   5.3 由于Promise的实例是一个异步操作，所以内部拿到操作的结果后，无法使用return
//          把结果返回给调用者，只能使用回调函数的方式返回结果

//6,可以在new出来的Promise实例上，调用.then()方法，预先为这个Promise异步操作，指定
//  成功（resolve）和失败（reject）回调函数；


//注意：这里new 出来的Promise，代表形式上的一个异步操作
// var promise = new Promise()

//这个是一个具体的异步操作，其中，使用function指定一个具体的异步操作
/*
var promise = new Promise(function(){
    //这个function内部写的就是具体的异步操作
})*/

const fs = require('fs')
//每当new一个Promise实例的时候，就会立即执行这个异步操作的代码
//也就是说，new的时候，处理能够得到一个promise实例之外，还会立即调用我们为promise
//构造函数传递的那个functino，执行这个function中的异步操作代码
/*
var promise = new Promise(function(){
    fs.readFile('./files/2.txt','utf-8',(err,dataStr)=> {
        if(err) throw callback(err)
        //return dataStr
        console.log(dataStr)
    })
})*/

function getFileByPath(fpath){
    var promise = new Promise(function(resolve,reject){
    fs.readFile(fpath,'utf-8',(err,dataStr)=> {
        if(err) return reject(err)

        resolve(dataStr)
    })
})
    return promise
}
var p = getFileByPath('./files/2.txt')
p.then(function(data){
    console.log(data+'---')
},function(err){
    cosnole.log(err.message)
})