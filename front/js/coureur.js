function loadRunners (runners) {
    var text="";
    runners.forEach(function (element) {
        console.log(element);
        text = '<div class="fiche-coureur" id="fiche-coureur-modele"><div class="first-row"><span class="nom-coureur">'+element['nom']+' '+element['prenom']+'</span><span class="categorie-coureur">(<span class="categorie-coureur-value">'+element['categorie_categorie_valeur']+'</span>)</span><button type="submit" class="modifier-coureur" onclick=modify_runner("'+element['mail']+'")>modifier</button></div><div class="second-row"><div><img class="icon-coureur" src="img/mail.png"><span class="info-coureur">'+element['mail']+'</span><div class="right-panel"><span class="info-italic-coureur">Numéro Licence: </span><span class="info-italic-coureur-value" id="licence">'+element['num_licence']+'</span></div></div><div><img class="icon-coureur" src="img/trophy.png"><span class="info-coureur">'+element['categorie']+'</span><div class="right-panel"><span class="info-italic-coureur">Code INSEE : </span><span class="info-italic-coureur-value">'+element['code_insee']+'</span></div></div><div><span class="info-italic-coureur-value" id="licence">Licence valide : '+element['valide']+'</span></div></div></div>';
        $('#runners').append(text);
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
        //console.log(text);
        $('#runner').append(text);
    });
    $('#modifier').on('submit', (event) => {
        event.preventDefault();
        ajaxRequest ('PUT', '../api/request.php/runner/' + $('input[name=raw_mail]').val(), () => {
            ajaxRequest ('GET', '../api/request.php/runners', loadRunners);
        },
        'nom=' + $('input[name=nom]').val() + '&prenom=' + $('input[name=prenom]').val()+'&num_licence=' + $('input[name=num_licence]').val() + '&date_naissance=' + $('input[name=date_naissance]').val() + '&valide=' + $('input[name=valide]').val() + '&club=' + $('input[name=club]').val() + '&code_insee=' + $('input[name=code_insee]').val() );
    });
}

ajaxRequest ('GET', '../api/request.php/runners', loadRunners);

