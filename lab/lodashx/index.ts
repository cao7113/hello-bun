import * as _ from "lodash";

function camelCase(): string {
  return _.camelCase("Foo Bar");
}

function main() {
  console.log(camelCase());
}

main();
