module.exports = function(value){
  return value.sort(function(x,y){
    return x-y
  })
}