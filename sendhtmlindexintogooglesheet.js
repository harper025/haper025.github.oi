let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let image = document.querySelector('#imageValue').value;
  let skills = document.querySelector('#skillsValue').value;
  let gender = document.querySelector('#genderValue').value;
  let breed = document.querySelector('#breedValue').value;
  let videofromyoutube = document.querySelector('#vedioValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwzgLNyU8Rhw4A30hVtaV6TRUTPll3_j9y2Xu4_5XI_AGepM-yOk3uXN27_vHPI8t1tPA/exec",
    data: {
        "name": name,
        "image": image,
        "skills": skills,
        "gender": gender,
        "breed": breed,
        "video" : videofromyoutube
        
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);
