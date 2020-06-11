function loadCourses (courses) {
    courses.forEach(course => {
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
        ficheCourse.find('.nom-coureur').attr('id', course['id']);

        ajaxRequest ('GET', '../api/request.php/runners/?idcourse=' + course['id'], getRunners);
        ficheCourse.find('.ajouter-coureur').attr('onclick', 'add_runner("' + course['id'] + '")')

        $('#liste-courses').append(ficheCourse);
    });
}

function getRunners (data) {
    console.log(data);
    data.forEach(function (element) {
        var text = '<br>' + element['nom'] + ' ' + element['prenom'];
        $('#' + element['id']).append(text);
    });
}

function add_runner (id) {
    document.getElementById('liste-courses').style.display= 'none';
    var form = $('<form>');
    form.attr('id', 'confirmer');

    var legend = $('<legend>');
    legend.text("Veuillez entrer l'adresse mail du coureur que vous souhaitez inscrire : ");

    var button = $('<button>');
    button.attr('type', 'submit');
    button.text('Confirmer');
    button.addClass('btn btn-warning');

    var input = $('<input>');
    input.attr('name', 'mail');
    input.attr('type', 'email');
    input.attr('placeholder', 'exemple@test.com');

    form.append(legend);
    form.append(input);
    form.append('<br><br>');
    form.append(button);
    $('#inscription-coureur').append(form);
    $('#confirmer').on('submit', () => {
        ajaxRequest ('POST', '../api/request.php/racing/mail=' + $('input[name=mail]').val(), test);
    });
}

function test (data) {
    console.log(data);
}

var login = 'jlr@mental.com';
var password ='test';
ajaxRequest ('GET', '../api/request.php/racing', loadCourses);