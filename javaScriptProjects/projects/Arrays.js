// let values = new Array();
// values.push(5);
// values.push(4);
// values.push(3);
// values.push(2);
// values.push(1);

// console.log(values[0]);
// values.pop();
// console.log(values);
// console.log(values.toString());
// console.log(values.length);
const fruits = ["banana", "apple", "coconut", "guawa"];
// console.log(fruits.toString());
// console.log(fruits.join());

// console.log(fruits.shift());
// console.log(fruits);

// console.log(fruits.unshift("banana"));
// console.log(fruits);

// let mergedArray=values.concat(fruits);
// console.log(mergedArray);

// fruits.copyWithin(2,3);
// console.log(fruits);


// let arr=[[1,2],[3,4],[5,6]];
// console.log(arr.flat());
console.log(fruits);

// fruits.splice(0,2,"new", "hi");
// console.log(fruits);

// let spliced = fruits.toSpliced(0,1);
// console.log(spliced);
let sliceed = fruits.slice(1);
console.log(sliceed);


const student = {
    "name": "abhi",
    "age": "12"
}
console.log(typeof student);


// function greeting() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("hello user from greeting ")
//         }, 3000);
//     })
// }

// async function call() {
//     console.log("fetching data.......");
//     const greet = await greeting();
//     console.log(greet);    
// }
//  call();


// 🗃️ Array to store user objects
let users = [];
let idCounter = 1;

// Simulate delay (like an API call)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ➕ CREATE
async function createUser(name, email) {
  await delay(500); // simulate delay
  const user = {
    id: idCounter++,
    name,
    email
  };
  users.push(user);
  console.log("✅ User created:", user);
}

// 📖 READ
async function showUsers() {
  await delay(300);
  console.log("📋 All Users:");
  for (let user of users) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
  }
}

// ✏️ UPDATE
async function updateUser(id, newName, newEmail) {
await delay(400);
  let found = false;
  for (let user of users) {
    if (user.id === id) {
      user.name = newName;
      user.email = newEmail;
      console.log("✏️ User updated:", user);
      found = true;
      break;
    }
  }
  if (!found) console.log("❌ User not found.");
}

// ❌ DELETE
async function deleteUser(id) {
  await delay(400);
  const originalLength = users.length;
  users = users.filter(user => user.id !== id);
  if (users.length < originalLength) {
    console.log(`🗑️ User with ID ${id} deleted.`);
  } else {
    console.log("❌ User not found.");
  }
}
async function test() {
  await createUser("Alice", "alice@example.com");
  await createUser("Bob", "bob@example.com");
  await showUsers();

  await updateUser(1, "Alice Updated", "alice@new.com");
  await deleteUser(2);
  await showUsers();
}

test();




