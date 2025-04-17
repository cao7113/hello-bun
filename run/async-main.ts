#! /usr/bin/env bun

// sync main
// function main() {
//   console.log("running in async main()");
// }

import { error } from "node:console";

// async main
async function main() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response = await fetch(url, { verbose: true });
  if (response.ok) {
    const data = await response.json();
    console.log("Response data:", data);
  } else {
    console.error("Error:", response.statusText);
  }

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((json) => console.log(json))
  //   .catch((error) => console.error("Error:", error));
}

main();
