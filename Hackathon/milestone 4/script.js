var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n       <h2> <b> Editable Resume </b> </h2>\n     <h3> Personal Information</h3>\n     <p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n     <p><b>email:</b><span contenteditable=\"true\">").concat(Email, "</span></p>\n     <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n\n     <h3>Education</h3>\n     <p contenteditable=\"true\">").concat(Education, "</p>\n\n     <h3>Experience</h3>\n     <p contenteditable=\"true\">").concat(Experience, "</p>\n\n     <h3>skills</h3>\n     <p contenteditable=\"true\">").concat(skills, "</p>\n\n\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
