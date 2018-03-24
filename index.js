var recipes = {};

function updateObjectWithKeyAndValue(Object, key, value){
  return Object.assign({}, object, {[key]: value});

}

function destructivelyUpdateObjectWithKeyAndValue(Object, key, value){
   Object[key] = value
   return Object
}