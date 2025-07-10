document.getElementById("loadDataBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("/api/items");
    const data = await response.json();

    const output = document.getElementById("output");
    output.innerHTML = data
      .map(
        (item) =>
          `<div>
         <img src="${item.image}" alt="${item.title}" />
         <h3>${item.title}</h3>
         <p>Price: ${item.price}</p>
       </div>`
      )
      .join("");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
