function addOptions (courses) {
    let datalist = document.getElementById('dropdown-liste-courses');

    courses.forEach(course => {
        let option = document.createElement('option');
        option.value = course.libelle;
        option.innerText = course.libelle;
        datalist.appendChild(option);
    });
}

ajaxRequest ('GET', '../api/request.php/racing', addOptions);