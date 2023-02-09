let fun = (abc) => {
  //   console.log(date.getMilliseconds());
  return new Promise((resolve, reject) => resolve(abc));
};
let fun2 = (fun) => {
  console.log("some cal");
  //   console.log(date.getMilliseconds());
  //   console.log(date.getMilliseconds());
  console.log(fun(5).then((result) => console.log(result)));
  //   console.log(date.getMilliseconds());
  console.log("abc2");
};
const date = new Date();

fun2(fun);
console.log("lAT");
