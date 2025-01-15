let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let image = document.querySelector('#imageValue').value;
  let skills = document.querySelector('#skillsValue').value;
  let gender = document.querySelector('#genderValue').value;
  let breed = document.querySelector('#breedValue').value;
  let video = document.querySelector('#videoValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxaQqwHh4YfDg2QAtVnlCkJhRZBD781nr2AzbC2d8hjcLhYgXSJmam1iIbQ1z-TTiXCqg/exec",
    data: {
        "name": name,
        "image": image,
        "skills": skills,
        "gender": gender,
        "breed": breed,
        "video" : video
        
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);
