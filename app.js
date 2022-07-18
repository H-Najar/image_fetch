console.log("about to fetch image");

fetch("child_with_bible.jpg")
  .then((repsonse) => {
    console.log(repsonse);
    return repsonse.blob();
  })
  .then((blob) => {
    console.log(blob);
    document.getElementById("image").src = URL.createObjectURL(blob);
  })
  .catch((error) => {
    console.log("error!");
    console.log(error);
  });
