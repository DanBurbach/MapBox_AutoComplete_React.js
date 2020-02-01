export default function enterCity() {
  console.log("test");

  async () => {
    const res = await fetch(
      "https://coding-challenge.echoandapex.com/locations?q=pdx"
    );
    const json = await res.json();
    const predictionsList = new DocumentFragment();
    json.predictions.forEach(prediction => {
      const item = document.createElement("p");
      item.innerHTML = prediction.name;
      predictionsList.appendChild(item);
    });
    document.body.appendChild(predictionsList);
  };
}
