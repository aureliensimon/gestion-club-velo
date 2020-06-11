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
    document.getElementById('ajouter-course').style.display= 'none';
    var form = $('<form>');
    form.attr('id', 'confirmer');

    var legend = $('<legend>');
    legend.text("Veuillez compléter TOUTES les informations : ");

    var button = $('<button>');
    button.attr('type', 'submit');
    button.attr('name', 'confirmer');
    button.text('Confirmer');
    button.addClass('btn btn-warning');

    var email = $('<input>');
    email.attr('name', 'mail');
    email.attr('type', 'email');
    email.attr('placeholder', 'Ex : exemple@test.com');

    var hidden_id = $('<input>');
    hidden_id.attr('name', 'id');
    hidden_id.attr('type', 'hidden');
    hidden_id.attr('value', id);

    var place = $('<input>');
    place.attr('name', 'place');
    place.attr('type', 'text');
    place.attr('placeholder', 'Ex : 1');

    var dossart = $('<input>');
    dossart.attr('name', 'dossart');
    dossart.attr('type', 'number');
    dossart.attr('placeholder', 'Ex : 33');

    var nb_points = $('<input>');
    nb_points.attr('name', 'nb_points');
    nb_points.attr('type', 'number');
    nb_points.attr('placeholder', 'Ex : 15');

    var temps = $('<input>');
    temps.attr('name', 'temps');
    temps.attr('type', 'text');
    temps.attr('placeholder', '00:30:00 (30 min)');

    form.append(legend);
    form.append(email);
    form.append(hidden_id);
    form.append(place);
    form.append(dossart);
    form.append(nb_points);
    form.append(temps);
    form.append('<br><br>');
    form.append(button);
    $('#inscription-coureur').append(form);
    $('#confirmer').on('submit', () => {
        event.preventDefault();
        ajaxRequest ('POST', '../api/request.php/racing/', (event) => {
            location.reload(true);
        }, $("#confirmer").serialize());
    });
}


// Attente de l'évènement AJOUTER UNE COURSE
$('#ajouter-course').on('click', () => {
    document.getElementById('liste-courses').style.display= 'none';
    document.getElementById('ajouter-course').style.display= 'none';


    var form = $('<form>');
    form.attr('id', 'confirmer');

    var legend = $('<legend>');
    legend.text("Merci de compléter TOUTES les informations concernant la course : ");

    var button = $('<button>');
    button.attr('type', 'submit');
    button.attr('name', 'confirm_add_racing');
    button.text('Confirmer');
    button.addClass('btn btn-warning');

    var label_libelle = $('<label>');
    label_libelle.text("Nom de la course : ");
    var libelle = $('<input>');
    libelle.attr('name', 'libelle');
    libelle.attr('type', 'text');
    libelle.attr('placeholder', 'Ex : Course cycliste à BREST');

    var label_date = $('<label>');
    label_date.text("Date de la course : ");
    var date = $('<input>');
    date.attr('name', 'date');
    date.attr('type', 'date');
    date.attr('placeholder', 'Ex : 2020-03-20');

    var label_tours = $('<label>');
    label_tours.text("Nombre de tours : ");
    var tours = $('<input>');
    tours.attr('name', 'nb_tour');
    tours.attr('type', 'number');
    tours.attr('placeholder', 'Ex : 1');

    var label_distance = $('<label>');
    label_distance.text("Distance totale : ");
    var distance = $('<input>');
    distance.attr('name', 'distance');
    distance.attr('type', 'number');
    distance.attr('placeholder', 'Ex : 33');

    var label_nb_coureurs = $('<label>');
    label_nb_coureurs.text("Nombre de coureurs max : ");
    var nb_coureurs = $('<input>');
    nb_coureurs.attr('name', 'nb_coureurs');
    nb_coureurs.attr('type', 'number');
    nb_coureurs.attr('placeholder', 'Ex : 15');

    var label_longueur = $('<label>');
    label_longueur.text("Longueur du parcours (en km) : ");
    var longueur_tour = $('<input>');
    longueur_tour.attr('name', 'longueur_tour');
    longueur_tour.attr('type', 'number');
    longueur_tour.attr('placeholder', '80');

    var label_club = $('<label>');
    label_club.text("Club qui organise : ");
    var club = $('<input>');
    club.attr('name', 'club');
    club.attr('type', 'text');
    club.attr('placeholder', 'Ex : ABC PLOUESCAT');

    form.append(legend);
    form.append(label_libelle);
    form.append(libelle);
    form.append('<br>');
    form.append(label_date);
    form.append(date);
    form.append('<br>');
    form.append(label_tours);
    form.append(tours);
    form.append('<br>');
    form.append(label_distance);
    form.append(distance);
    form.append('<br>');
    form.append(label_nb_coureurs);
    form.append(nb_coureurs);
    form.append('<br>');
    form.append(label_longueur);
    form.append(longueur_tour);
    form.append('<br>');
    form.append(label_club);
    form.append(club);
    form.append('<br><br>');
    form.append(button);
    $('#inscription-coureur').append(form);
    $('#confirmer').on('submit', (event) => {
        event.preventDefault();
        ajaxRequest ('POST', '../api/request.php/racing/', () => {
            ajaxRequest ('GET', '../api/request.php/runners', loadCourses);
        }, $("#confirmer").serialize());
    });
});

ajaxRequest ('GET', '../api/request.php/racing/', loadCourses);