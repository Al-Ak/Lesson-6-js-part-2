
const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchAsyncTodos() {
  console.log("Started....");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const userId1 = 10;
  // const { id, title, body } = post;
  let Ket = "";
  for (let i = 0; i < userId1; i++) {
    // userIdT = userId.toggle("1");
    // const filteredData = data.filter((post) => post.userId === userId1);

    Ket += `
  <div class="g_1"><a>UseId: ${data[i].userId}<br>ID: ${data[i].id}</br> ${data[i].body}</a></div>`;
  }
  document.getElementById("Hi").innerHTML= Ket;
}

fetchAsyncTodos();

// console.log(filter((data) => userId === 1));

// const dcopy = JSON.parse(JSON.stringify(url));
// console.log(dcopy);
