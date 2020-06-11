function loadRunners (runners) {
    console.log(runners);
    runners.forEach(function (element) {
        console.log(element);

        // Div principale
        var div = $("<div>");
        div.addClass('fiche-coureur');
        div.attr('id', 'fiche-coureur-modele');

        // DIV 1
        var div1 = $("<div>");
        div1.addClass('first-row');

        var span1 = $('<span>');
        span1.addClass('nom-coureur');
        span1.text(element['nom'] + ' ' +element['prenom']);

        var span1_2 = $('<span>');
        span1_2.addClass('categorie-coureur');
        span1_2.text('(' + element['categorie_categorie_valeur'] + ')');

        var button1 = $('<button>');
        button1.addClass('modifier-coureur');
        button1.attr('type', 'submit');
        button1.attr('onclick', 'modify_runner("'+ element['mail']+ '")');
        button1.text('Modifier');

        // DIV 2
        var div2 = $('<div>');
        div2.addClass('second-row');

        // DIV 2.1
        var div2_1 = $('<div>');

        var img2_1 = $('<img>');
        img2_1.addClass('icon-coureur');
        img2_1.attr('src', 'img/mail.png');

        var span2_1 = $('<span>');
        span2_1.addClass('info-coureur');
        span2_1.text(' ' + element['mail']);

        // DIV 2.1.1
        var div2_1_1= $('<div>');
        div2_1_1.addClass('right-panel');

        var span2_1_1 = $('<span>');
        span2_1_1.addClass('info-italic-coureur');
        span2_1_1.text('Numéro Licence : ');
        var span2_1_2 = $('<span>');
        span2_1_2.addClass('info-italic-coureur-value');
        span2_1_2.attr('id', 'licence');
        span2_1_2.text(element['num_licence']);

        // DIV 2.2
        var div2_2 = $('<div>');

        var img2_2 = $('<img>');
        img2_2.addClass('icon-coureur');
        img2_2.attr('src', 'img/trophy.png');

        var span2_2 = $('<span>');
        span2_2.addClass('info-coureur');
        span2_2.text(' ' + element['categorie']);

        // DIV 2.2.1
        var div2_2_1 = $('<div>');
        div2_2_1.addClass('right-panel');

        var span2_2_1 = $('<span>');
        span2_2_1.addClass('info-italic-coureur');
        span2_2_1.text('Code INSEE : ');
        var span2_2_2 = $('<span>');
        span2_2_2.addClass('info-italic-coureur-value');
        span2_2_2.attr('id', 'licence');
        span2_2_2.text(element['code_insee']);

        // DIV 2.3
        var div2_3 = $('<div>');

        var span2_3 = $('<span>');
        span2_3.addClass('info-italic-coureur-value');
        span2_3.text('Licence valide : ' + element['valide']);

        // INSERTION DANS LE HTML
        div2_3.append(span2_3);

        div2_2_1.append(span2_2_1);
        div2_2_1.append(span2_2_2);
        div2_2.append(img2_2);
        div2_2.append(span2_2);
        div2_2.append(div2_2_1);

        div2_1_1.append(span2_1_1);
        div2_1_1.append(span2_1_2);
        div2_1.append(img2_1);
        div2_1.append(span2_1);
        div2_1.append(div2_1_1);

        div2.append(div2_1);
        div2.append(div2_2);
        div2.append(div2_3);

        div1.append (button1);
        div1.append(span1);
        div1.append(span1_2);

        div.append(div1);
        div.append(div2);

        $('#runners').append(div);
    });
}

function modify_runner (mail) {
    console.log(mail);
    ajaxRequest ('GET', '../api/request.php/runner/?mail='+mail, loadRunner);
}

function loadRunner (data) {
    document.getElementById('runners').style.display= 'none';
    document.getElementById('runner').style.display= 'flex';
    raw_mail = data['0']['mail'];
    data.forEach(function (element) {
        var text='<form id="modifier"><legend>Vous pouvez modifier les champs :</legend><br><label>Nom : </label><input type="text" name="nom" value="'+element['nom']+'"><br><label>Prénom : </label><input type="text" name="prenom" value="'+element['prenom']+'"><br><label>Numéro de la licence : </label><input type="number" name="num_licence" value="'+element['num_licence']+'"><br><label>Date de naissance : </label><input type="date" name="date_naissance" value="'+element['date_naissance']+'"><br><label>Valide : </label><input type="number" name="valide" value="'+element['valide']+'"><br><label>Club : </label><input type="text" name="club" value="'+element['club']+'"><br><label>Code INSEE : </label><input type="number" name="code_insee" value="'+element['code_insee']+'"><input type="hidden" name="raw_mail" value="'+raw_mail+'"><br><input type="submit" value="Modifier"></form>';
        $('#runner').append(text);
    });
    $('#modifier').on('submit', () => {
        event.preventDefault();
        ajaxRequest ('PUT', '../api/request.php/runner/' + $('input[name=raw_mail]').val(), () => {
            location.reload(true);
        }, $("#modifier").serialize()); //serialize permet d'envoyer tout le contenu du form dans l'url
    });
}

ajaxRequest ('GET', '../api/request.php/runners', loadRunners);

