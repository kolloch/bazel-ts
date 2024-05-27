import { other } from "./other";
import { uniqueStringName } from "./generated";

export function hello() {
    return "Hello, world!" + other() + uniqueStringName
}