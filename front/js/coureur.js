function loadRunners (runners) {
    // let model = document.getElementById('fiche-coureur-modele');
    // let parent = document.getElementById('runners');
    
    // while (parent.firstChild) parent.removeChild(parent.firstChild);

    // runners.forEach(runner => {
    //     console.table(runner);
    //     let newRunner = model.cloneNode(true);

    //     newRunner.getElementsByClassName('nom-coureur')[0].textContent = runner.nom + ' ' + runner.prenom;
    //     newRunner.getElementsByClassName('categorie-coureur-value')[0].textContent = runner.categorie_categorie_valeur;
    //     newRunner.getElementsByClassName('mail-coureur')[0].textContent = runner.mail;
    //     newRunner.getElementsByClassName('nom-categorie-coureur')[0].textContent = runner.categorie;
    //     newRunner.getElementsByClassName('licence')[0].textContent = runner.num_licence;
    //     newRunner.getElementsByClassName('insee')[0].textContent = runner.code_insee;

    //     newRunner.style.display = 'block';

    //     parent.appendChild(newRunner);
    var text="";
    runners.forEach(function (element) {
        console.log(element);
        text = '<div class="fiche-coureur" id="fiche-coureur-modele"><div class="first-row"><span class="nom-coureur">'+element['nom']+' '+element['prenom']+'</span><span class="categorie-coureur">(<span class="categorie-coureur-value">'+element['categorie_categorie_valeur']+'</span>)</span><button type="submit" class="modifier-coureur" onclick=modify_runner("'+element['mail']+'")>modifier</button></div><div class="second-row"><div><img class="icon-coureur" src="img/mail.png"><span class="info-coureur">'+element['mail']+'</span><div class="right-panel"><span class="info-italic-coureur">Numéro Licence: </span><span class="info-italic-coureur-value" id="licence">'+element['num_licence']+'</span></div></div><div><img class="icon-coureur" src="img/trophy.png"><span class="info-coureur">'+element['categorie']+'</span><div class="right-panel"><span class="info-italic-coureur">Code INSEE : </span><span class="info-italic-coureur-value">'+element['code_insee']+'</span></div></div></div></div>';
        $('#runners').append(text);
    });
//});

    
}

function modify_runner (mail) {
    console.log(mail);
    ajaxRequest ('GET', '../api/coureurs.php/runner/?mail='+mail, loadRunner);
}

function loadRunner (data) {
    document.getElementById('runners').style.display= 'none';
    document.getElementById('runner').style.display= 'flex';
    raw_mail = data['0']['mail'];
    data.forEach(function (element) {
        var text='<form id="modifier"><legend>Vous pouvez modifier les champs :</legend><br><label>E-mail : </label><input type="email" name="mail" value="'+element['mail']+'"><br><label>Nom : </label><input type="text" name="nom" value="'+element['nom']+'"><br><label>Prénom : </label><input type="text" name="prenom" value="'+element['prenom']+'"><br><label>Numéro de la licence : </label><input type="number" name="num_licence" value="'+element['num_licence']+'"><br><label>Date de naissance : </label><input type="date" name="date_naissance" value="'+element['date_naissance']+'"><br><label>Valide : </label><input type="number" name="valide" value="'+element['valide']+'"><br><label>Club : </label><input type="text" name="club" value="'+element['club']+'"><br><label>Code INSEE : </label><input type="number" name="code_insee" value="'+element['code_insee']+'"><input type="hidden" name="categorie" value="'+element['categorie']+'"><input type="hidden" name="categorie" value="'+element['categorie_categorie_valeur']+'"><input type="hidden" name="raw_mail" value="'+raw_mail+'"><br><input type="submit" value="Modifier"></form>';
        //console.log(text);
        $('#runner').append(text);
    });
    $('#modifier').on('submit', (event) => {
        event.preventDefault();
        ajaxRequest ('PUT', '../api/coureurs.php/runner/', loadRunners);
    });
}

ajaxRequest ('GET', '../api/coureurs.php/runners', loadRunners);

