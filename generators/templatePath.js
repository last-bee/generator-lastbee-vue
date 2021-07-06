// var fs = require('fs');
// var path = require('path');
// console.log(path.resolve(__dirname));
// //解析需要遍历的文件夹，我这以E盘根目录为例
// var filePath = path.resolve(__dirname, './app/templates');
// const fileList = fs.readdirSync(filePath)
// console.log(fileList)
// fileList.forEach(filename => {
//   var filedir = path.join(filePath, filename)
//   const fileInfo = fs.readFileSync(filedir)
//   console.log(fileInfo)
// })
// //调用文件遍历方法
// // fileDisplay(filePath);

// // /**
// //  * 文件遍历方法
// //  * @param filePath 需要遍历的文件路径
// //  */
// // function fileDisplay(filePath){
// //     //根据文件路径读取文件，返回文件列表
// //     fs.readdir(filePath,function(err,files){
// //         if(err){
// //           console.warn(err)
// //         }else{
// //           //遍历读取到的文件列表
// //           files.forEach(function(filename){
// //               //获取当前文件的绝对路径
// //               var filedir = path.join(filePath,filename);
// //               //根据文件路径获取文件信息，返回一个fs.Stats对象
// //               fs.stat(filedir,function(eror,stats){
// //                   if(eror){
// //                     console.warn('获取文件stats失败');
// //                   }else{
// //                     var isFile = stats.isFile();//是文件
// //                     var isDir = stats.isDirectory();//是文件夹
// //                     if(isFile){
// //                       // console.log(filedir);
// //                       fileList.push(isFile)
// //                     }
// //                     if(isDir){
// //                       fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
// //                     }
// //                   }
// //               })
// //           });
// //         }
// //     });
// // }

// // console.log(fileList)


// console.log(list)

// module.exports = (p) => {
//   const list = []
//   const fs = require("fs");
//   const path = require('path');
//   const readDir = (entry) => {
//     const dirInfo = fs.readdirSync(entry);
//     dirInfo.forEach(item=>{
//       const location = path.join(entry,item);
//       const info = fs.statSync(location);
//       if(info.isDirectory()){
//         // console.log(`dir:${location}`);
//         readDir(location);
//       }else{
//         console.log(`file:${location}`);
//         list.push(location)
//       }
//     })
//   }
//   //path.resolve(__dirname, './app/templates')
//   readDir(p)
//   return list
// }
module.exports = (route) => {
  const list = []
  const fs = require("fs");
  const path = require('path');
  const readDir = (entry) => {
    const dirInfo = fs.readdirSync(entry);
    dirInfo.forEach(item=>{
      const location = path.join(entry,item);
      const info = fs.statSync(location);
      if(info.isDirectory()){
        // console.log(`dir:${location}`);
        readDir(location);
      }else{
        console.log(`file:${location}`);
        list.push(location)
      }
    })
  }
  //path.resolve(__dirname, './app/templates')
  readDir(route)
  return list.map(item => item.match(/(?<=templates\/)(.*)/g)[0])
}
  