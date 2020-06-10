function loadCourses (courses) {
    /*
    let model = document.getElementById('fiche-course-modele');
    let parent = document.getElementById('liste-courses');
    
    while (parent.firstChild) parent.removeChild(parent.firstChild);
    */

    courses.forEach(course => {
        console.table(course);

        let ficheCourse = $('#fiche-course-modele').clone();

        ficheCourse.attr('id', '');
        ficheCourse.attr('style', '');

        ficheCourse.find('.nom-course').text(course['libelle']);
        ficheCourse.find('.date-course').text(course['date']);
        ficheCourse.find('#inscriptions_max').text(course['nb_coureur']);
        ficheCourse.find('#longueur_tour').text(course['longueur_tour']);
        ficheCourse.find('#nb_tour').text(course['nb_tour']);
        ficheCourse.find('#distance').text(course['distance']);
        ficheCourse.find('#club_orga').text(course['club']);

        ajaxRequest ('GET', '../api/request.php/runners', getRunners);
        //ficheCourse.find('#club_orga').attr('onclick', 'add_runner("' + course + '")')


        $('#liste-courses').append(ficheCourse);
    });

    
}

ajaxRequest ('GET', '../api/request.php/racing', loadCourses);