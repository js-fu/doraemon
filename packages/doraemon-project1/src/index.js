import foo from "./foo";

console.log("hello project1");
foo();

async function main() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ a: 11 });
    }, 1000);
  });
  console.log(data);
}

main();
