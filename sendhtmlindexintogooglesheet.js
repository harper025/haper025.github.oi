let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let Image = document.querySelector('#ImageValue').value;
  let skills = document.querySelector('#skillsValue').value;
  let gender = document.querySelector('#genderValue').value;
  let breed = document.querySelector('#breedValue').value;
  $.ajax({
    url: "填入google sheet api url",
    data: {
        "name": name,
        "Image": Image,
        "skills": skills,
        "gender": gender,
        "breed": breed,
        
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);
