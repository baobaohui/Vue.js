//需求：封装一个方法，给出文件路径，读取文件内容并返回
const fs = require('fs')
const path = require('path')


function getFileByPath(fpath,succCb,errCb){
    fs.readFile(fpath,'utf-8',(err,dataStr)=> {
        if(err) return errCb(err)
        //return dataStr
        succCb(dataStr)
    })
}

/*getFileByPath(path.join(__dirname,'./files/1.txt'),function(data) {
        console.log(data+"成功")
    },function(err){
        console.log('失败的结果，使用失败的回调函数进行处理'+err.message)
})*/

//需求：先读取文件1，在读取文件2，最后读取文件3
//回调地狱
//使用ES6中的Promise解决回调地狱的问题
getFileByPath(path.join(__dirname,'./files/1.txt'),function(data) {
        console.log(data)

        getFileByPath(path.join(__dirname,'./files/1.txt'),function(data) {
            console.log(data)

            getFileByPath(path.join(__dirname,'./files/1.txt'),function(data) {
                console.log(data)

            })
        })
})