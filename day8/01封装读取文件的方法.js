//需求：封装一个方法，给出文件路径，读取文件内容并返回
const fs = require('fs')
const path = require('path')

//普通读取文件的方式
/*fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
    if(err) throw err
    console.log(dataStr)
})*/

//初衷：给定文件路径，返回读取到的内容
//规定一下callback的两个参数，第一个参数为失败的结果，第二个参数时成功的结果
//同时，规定成功的回调返回的结果应该位于callback参数的第二个位置，此时，第一个位置由于没有出错，放上null
//如果失败了，第一个位置放上Error对象， 第二个位置防止一个undefined
function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr)=> {
        if(err) throw callback(err)
        //return dataStr
        callback(null,dataStr)
    })
}
// var result = getFileByPath(path.join(__dirname,'./files/1.txt'))
// console.log(result)
getFileByPath(path.join(__dirname,'./files/1.txt'),(err,dataStr)=>{
    if(err) return console.log(err.message)
    console.log(dataStr)
})