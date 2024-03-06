
type Custom = {
  age: number,
  name: string,
}

type Item = number | string | Custom;

function append(a: Item[]) {
  a.push("Hello fem!");
}

const items: Item[] = [1, "hi", {age: 23, name: "will"}];

const nums: number[] = [1, 2, 3];

append(nums)

append(items)

console.log(items)
