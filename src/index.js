const urlBase = "https://platzi-avo.vercel.app/";

/* podemos obtener el fetch con Promise:
windows
    .fetch(url)
    .then((respuesta) => respuesta.json())
    .then(data => {
        console.log(data);
    });
Pero lo hacemos con asincronismo
*/

async function fetchData() {
//   const response = await fetch(`${urlBase}api/avo`);
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo`);

  const responseJson = await response.json();
  const allItems = [];
  //   return console.log(data);
  responseJson.data.foreach((item) => {
    // console.log(item.name);
    const title = document.createElement("h2");

    const container = document.createElement("div");
    container.append(title);
    allItems.push(container);
  });
  document.body.append(...allItems);
}

fetchData();
// console.log(fetchData(`${urlBase}api/avo`));
