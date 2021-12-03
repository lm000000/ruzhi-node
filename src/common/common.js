
exports.findAll = function(object){
   return new Promise((resolve,reject)=>{
        object.find(function(error,data){
            if(error){
                console.log("查询失败")
            }else{
             resolve(data)
            }
        })
    })
}
exports.findOne = function(object,condition){
    return new Promise((resolve,reject)=>{
    object.find(condition,function(error,data){
       if(error){
           console.log("查询失败")
       }else{
        resolve(data)
       }
   })
})
}



exports.add = function(object,params){
     let admin = new object(params)
     admin.save(function(error,data){
         if(error){
             console.log("增加失败")
         }else{
            console.log("增加成功")
         }
     })
}

exports.remove = function(object){
    object.remove(function(error,data){
       if(error){
           console.log("删除失败")
       }else{
           console.log("删除成功")
       }
   })
}

exports.removeOne = function(object,params){
    object.remove(params,function(error,data){
        if(error){
            console.log("删除失败")
        }else{
            console.log("删除成功")
        }
   })
}

exports.update = function(object,condition,params){
    object.update(condition,params,function(error,data){
        if(error){
            console.log("更新失败")
        }else{
            console.log("更新成功")
        }
    })
}

