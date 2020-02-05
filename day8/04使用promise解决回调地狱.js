const fs = require('fs')

function getFileByPath(fpath){
    return new Promise(function(resolve,reject){
    fs.readFile(fpath,'utf-8',(err,dataStr)=> {
        if(err) return reject(err)

        resolve(dataStr)
    })
})

}

//先读取文件1，在读取文件2，最后读取3

//读取文件1
//在上一个.then中，返回一个新的promise实例，可以继续用下一个.then处理
//如果前面的promise执行失败，我们不想让后续的promise操作被终止，可以为每个promise指定失败的回调

/*
getFileByPath('./files/1.txt')
    .then(function(data){
        console.log(data)

        //读取文件2
        return getFileByPath('./files/2.txt')
    },function(err){
        console.log('这是失败的结果：'+err.message)
        return getFileByPath('./files/3.txt')
    })
    .then(function(data){
        console.log(data)

        //读取文件3
        return getFileByPath('./files/3.txt')
    })
    .then(function(data){
        console.log(data)

    })
*/

//另一个相反的需求为，后续promise的执行依赖于前面的promise的执行结果，实现一旦有报错，则立即终止所有promise的执行
getFileByPath('./files/1.txt')
    .then(function(data){
        console.log(data)

        //读取文件2
        return getFileByPath('./files/2.txt')
    })
    .then(function(data){
        console.log(data)

        //读取文件3
        return getFileByPath('./files/3.txt')
    })
    .then(function(data){
        console.log(data)

    })
    //catch的作用：如果前面有任何promise执行失败，则立即终止所有promise的执行，并马上进入catch去处理promise中
    //抛出的异常
    .catch(function(err){
        console.log('这是自己的处理方式：'+err.message)
    })
