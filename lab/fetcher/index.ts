import fetchFromPkg from "node-fetch"; // 标准默认导入
// import { fetch as fetchFromPkg } from "node-fetch";

function fetchFromNodeFetch(url: string) {
  fetchFromPkg(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

function nativeFetch(url: string) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

const url = "https://jsonplaceholder.typicode.com/posts/1";

Promise.all([
  console.log("fetch from node-fetch"),
  fetchFromNodeFetch(url),
  console.log("fetch from node native fetch"),
  nativeFetch(url),
]);

/** run below in browser console:
 
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error("Error:", error));

 */
