import _ from "lodash";
import { z } from "zod";

const value = z.string().parse("Hello world!");
console.log(_.upperCase(value));
