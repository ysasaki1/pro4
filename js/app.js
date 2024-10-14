$(document).foundation();

function changeImage(image) {
  const imgElement = document.querySelector('.profile-picture img');
  if (image === 'image1') {
    imgElement.src = 'images/cat.jpg'; // 画像1のパス
  } else if (image === 'image2') {
    imgElement.src = 'images/profile.jpg'; // 画像2のパス
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const alertButton = document.getElementById("alertButton");
  const nameInput = document.getElementById("nameInput");
  const headline = document.getElementById("headline");

  alertButton.addEventListener("click", function() {
    const name = nameInput.value;
    alert(`SASAKI, Yu: ${name}`); 
    headline.textContent = name;
  });
});
