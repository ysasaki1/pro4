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


const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const content = req.body.content; // フォームからのデータ
    fs.appendFile('inquiries.txt', content + '\n', (err) => {
        if (err) {
            return res.status(500).send('Error writing to file');
        }
        res.send('Content saved!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
