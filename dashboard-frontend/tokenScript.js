// const jwt = require("jsonwebtoken");
// const CUBE_API_SECRET = "f1c1bf0374ffea94fe40e8947a3796edb1c803bf4e7fed5987c66b3c56632b351d40f98a7d70fab3c756a31dd409943634a6e8732acc9947c2bebf8c0936de61";

// const cubejsToken = jwt.sign({}, process.env.CUBEJS_TOKEN, {
//   expiresIn: "30d",
// });
// // console.log(CUBE_API_SECRET);
// console.log(cubejsToken);


const jwt = require("jsonwebtoken");
const CUBE_API_SECRET = "f1c1bf0374ffea94fe40e8947a3796edb1c803bf4e7fed5987c66b3c56632b351d40f98a7d70fab3c756a31dd409943634a6e8732acc9947c2bebf8c0936de61";

const cubejsToken = jwt.sign({}, CUBE_API_SECRET, {
  expiresIn: "30d",
});
// console.log(CUBE_API_SECRET);
console.log(cubejsToken);