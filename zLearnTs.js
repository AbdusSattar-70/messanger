var showValue = function(obj) {
  var values = Object.values(obj);
  if (values.length > 0) {
    return values.join(',');
  }
  return "empty";
};

var result = showValue({ name: "sattar", age: 23 });
console.log(result);
