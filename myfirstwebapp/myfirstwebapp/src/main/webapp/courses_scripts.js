// display courses

function displayCoursesTeacher() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr.status == 200) {
                var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Courses";
                newHeaderRow.appendChild(newHeaderCell);

                var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
                var coursesArray = JSON.parse(xhr.responseText);

                for (let i = 0; i < coursesArray.length; i++) {
                    // Insert a row at the end of table
                    var newCourseRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newCourseCodeCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(coursesArray[i].code);
                    newCourseCodeCell.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(coursesArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                }

            } else {
                alert(xhr.status + " : " + xhr.responseText);

            }
        }
    }

    xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/courses_teacher', true);
    xhr.send(null);
}


function displayCoursesStudent() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr.status == 200) {
                var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Courses";
                newHeaderRow.appendChild(newHeaderCell);

                var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
                var coursesArray = JSON.parse(xhr.responseText);

                for (let i = 0; i < coursesArray.length; i++) {
                    // Insert a row at the end of table
                    var newCourseRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newCourseCodeCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(coursesArray[i].code);
                    newCourseCodeCell.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(coursesArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                }

            } else {
                alert(xhr.status + " : " + xhr.responseText);

            }
        }
    }

    xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/courses_student', true);
    xhr.send(null);
}
function displayCoursesSecretary() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr.status == 200) {
                var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Courses";
                newHeaderRow.appendChild(newHeaderCell);

                var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
                var coursesArray = JSON.parse(xhr.responseText);

                for (let i = 0; i < coursesArray.length; i++) {
                    // Insert a row at the end of table
                    var newCourseRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newCourseCodeCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(coursesArray[i].code);
                    newCourseCodeCell.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(coursesArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                    
                    var newShowCell = newCourseRow.insertCell();
                    var newShowLink = document.createElement("a");
                    newShowLink.href = 'courses_infor.html?courseId=' + coursesArray[i].code; 
                    newShowLink.textContent = "Show Courses Infor"; 
                    newShowCell.appendChild(newShowLink);
                    
                     var newTeacherNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newTeacherName = document.createTextNode(coursesArray[i].account);
                    newTeacherNameCell.appendChild(newTeacherName);
                }

            } else {
                alert(xhr.status + " : " + xhr.responseText);

            }
        }
    }

    xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/courses_secretary', true);
    xhr.send(null);
}

function displayCoursesInfor() {
    const xhr6 = new XMLHttpRequest();
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');
    xhr6.onreadystatechange = () => {
        if (xhr6.readyState === 4) {
            if (xhr6.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr6.status == 200) {

                var tbodyRef = document.getElementById('student-table').getElementsByTagName('tbody')[0];
                var studentArray = JSON.parse(xhr6.responseText);
                var theaderRef = document.getElementById('student-table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Student List Of " + studentArray[0].name;
                newHeaderRow.appendChild(newHeaderCell);



                for (let i = 0; i < studentArray.length; i++) {
                    // Insert a row at the end of table
                    var newStuRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newStuNameRow = newStuRow.insertCell();
                    // Append a text node to the cell
                    var newStuName = document.createTextNode(studentArray[i].account);
                    newStuNameRow.appendChild(newStuName);
                    // Insert a cell at the end of the row
                    var newCodeRow = newStuRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(studentArray[i].code);
                    newCodeRow.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newStuRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(studentArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                }

            } else {
                alert(xhr6.status + " : " + xhr6.responseText);

            }
        }
    }

    xhr6.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/get_students?courseId=' + courseId, true);
    xhr6.send(null);
}


