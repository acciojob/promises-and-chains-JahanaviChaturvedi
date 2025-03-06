//your JS code here. If required.
document.getElementById("btn").addEventListener("click", (e)=> {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  })
  .then(message => alert(message))
  .catch(message => alert(message));
});
