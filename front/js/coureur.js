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

function loadRunner (test) {
    console.log(test);
    document.getElementById('runners').style.display= 'none';
    document.getElementById('runner').style.display= 'flex';
    var text='<form><legend>Vous pouvez modifier les champs :</legend><br><label>E-mail : </label><input type="email" name="mail" placeholder="Ex : exemple@test.com"><br><label>Nom : </label><input type="text" name="nom" placeholder="Ex : Lecorchet"><br><label>Prénom : </label><input type="text" name="prenom" placeholder="Ex : Aubane"><br><label>Numéro de la licence : </label><input type="number" name="num_licence" placeholder="Ex : 55544762"><br><label>Date de naissance : </label><input type="date" name="date_naissance" placeholder="Ex : AAAA-MM-JJ"><br><label>Valide : </label><input type="number" name="valide" placeholder="Ex : 1"><br><label>Club : </label><input type="text" name="club" placeholder="Ex : ABC PLOUESCAT"><br><label>Code INSEE : </label><input type="number" name="code_insee" placeholder="Ex : 29200"><br><input type="submit" id="modifier" value="Modifier"></form>';
    $('#runner').html(text);
}

ajaxRequest ('GET', '../api/coureurs.php/runners', loadRunners);

$('#runner').on('submit', 'modifier', () => {
    ajaxRequest ('POST', '../api/coureurs.php/runner/', loadRunner);
});