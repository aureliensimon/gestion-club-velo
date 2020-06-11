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

        ajaxRequest ('GET', '../api/request.php/runners/?idcourse=' + course['id'] + '&club_course=' + course['club'], getRunners);
        ficheCourse.find('.ajouter-coureur').attr('onclick', 'add_runner("' + course['id'] + '")');

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

    var fieldset = $('<fieldset>');

    var legend = $('<legend>');
    legend.text("Veuillez compléter TOUTES les informations : ");

    var button = $('<button>');
    button.attr('type', 'submit');
    button.attr('name', 'confirmer');
    button.text('Confirmer');
    button.addClass('btn btn-warning');

    
    var label_email = $('<label>');
    label_email.text("E-mail : ");
    var email = $('<input>');
    email.attr('name', 'mail');
    email.attr('type', 'email');
    email.attr('placeholder', 'Ex : exemple@test.com');
    email.prop('required', true);

    var hidden_id = $('<input>');
    hidden_id.attr('name', 'id');
    hidden_id.attr('type', 'hidden');
    hidden_id.attr('value', id);

    var label_place = $('<label>');
    label_place.text("Classement : ");
    var place = $('<input>');
    place.attr('name', 'place');
    place.attr('type', 'text');
    place.attr('placeholder', 'Ex : 1');
    place.prop('required', true);

    var label_dossart = $('<label>');
    label_dossart.text("Numéro du dossart : ");
    var dossart = $('<input>');
    dossart.attr('name', 'dossart');
    dossart.attr('type', 'number');
    dossart.attr('placeholder', 'Ex : 33');
    dossart.prop('required', true);

    var label_nb_points = $('<label>');
    label_nb_points.text("Nombre de points effectués : ");
    var nb_points = $('<input>');
    nb_points.attr('name', 'nb_points');
    nb_points.attr('type', 'number');
    nb_points.attr('placeholder', 'Ex : 15');
    nb_points.prop('required', true);

    var label_temps = $('<label>');
    label_temps.text("Temps : ");
    var temps = $('<input>');
    temps.attr('name', 'temps');
    temps.attr('type', 'text');
    temps.attr('placeholder', '00:30:00 (30 min)');
    temps.prop('required', true);

    form.append(label_email);
    form.append(email);
    form.append('<br>');
    form.append(hidden_id);
    form.append(label_place);
    form.append(place);
    form.append('<br>');
    form.append(label_dossart);
    form.append(dossart);
    form.append('<br>');
    form.append(label_nb_points);
    form.append(nb_points);
    form.append('<br>');
    form.append(label_temps);
    form.append(temps);
    form.append('<br><br>');
    form.append(button);
    fieldset.append(legend);
    fieldset.append(form);
    $('#inscription-coureur').append(fieldset);
    $('#confirmer').on('submit', () => {
        event.preventDefault();
        ajaxRequest ('POST', '../api/request.php/racing/', () => {
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

    var fieldset = $('<fieldset>');

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
    libelle.prop('required', true);

    var label_date = $('<label>');
    label_date.text("Date de la course : ");
    var date = $('<input>');
    date.attr('name', 'date');
    date.attr('type', 'date');
    date.attr('placeholder', 'Ex : 2020-03-20');
    date.prop('required', true);

    var label_tours = $('<label>');
    label_tours.text("Nombre de tours : ");
    var tours = $('<input>');
    tours.attr('name', 'nb_tour');
    tours.attr('type', 'number');
    tours.attr('placeholder', 'Ex : 1');
    tours.prop('required', true);

    var label_distance = $('<label>');
    label_distance.text("Distance totale (en km) : ");
    var distance = $('<input>');
    distance.attr('name', 'distance');
    distance.attr('type', 'number');
    distance.attr('placeholder', 'Ex : 33');
    distance.prop('required', true);

    var label_nb_coureurs = $('<label>');
    label_nb_coureurs.text("Nombre de coureurs max : ");
    var nb_coureurs = $('<input>');
    nb_coureurs.attr('name', 'nb_coureurs');
    nb_coureurs.attr('type', 'number');
    nb_coureurs.attr('placeholder', 'Ex : 15');
    nb_coureurs.prop('required', true);

    var label_longueur = $('<label>');
    label_longueur.text("Longueur d'un tour (en km) : ");
    var longueur_tour = $('<input>');
    longueur_tour.attr('name', 'longueur_tour');
    longueur_tour.attr('type', 'number');
    longueur_tour.attr('placeholder', '80');
    longueur_tour.prop('required', true);

    var label_club = $('<label>');
    label_club.text("Club qui organise : ");
    var club = $('<input>');
    club.attr('name', 'club');
    club.attr('type', 'text');
    club.attr('placeholder', 'Ex : ABC PLOUESCAT');
    club.prop('required', true);

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
    fieldset.append(legend);
    fieldset.append(form);
    $('#inscription-coureur').append(fieldset);
    
    $('#confirmer').on('submit', (event) => {
        event.preventDefault();
        ajaxRequest ('POST', '../api/request.php/add_racing/', () => {
            location.reload(true);
        }, $("#confirmer").serialize());
    });
});

ajaxRequest ('GET', '../api/request.php/racing/', loadCourses);