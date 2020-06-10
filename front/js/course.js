function loadCourses (courses) {
    // let model = document.getElementById('fiche-course-modele');
    // let parent = document.getElementById('liste-courses');
    
    // while (parent.firstChild) parent.removeChild(parent.firstChild);

    // courses.forEach(course => {
    //     console.table(course);
    // });
    console.log(courses);

}

ajaxRequest ('GET', '../api/request.php/racing', loadCourses);