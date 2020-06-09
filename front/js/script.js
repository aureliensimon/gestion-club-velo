function loadRunners (runners) {
    let model = document.getElementById('fiche-coureur-modele');
    let parent = document.getElementById('runners');
    
    while (parent.firstChild) parent.removeChild(parent.firstChild);

    runners.forEach(runner => {
        console.table(runner);
        let newRunner = model.cloneNode(true);

        newRunner.getElementsByClassName('nom-coureur')[0].textContent = runner.nom + ' ' + runner.prenom;
        newRunner.getElementsByClassName('categorie-coureur-value')[0].textContent = runner.categorie_categorie_valeur;
        newRunner.getElementsByClassName('mail-coureur')[0].textContent = runner.mail;
        newRunner.getElementsByClassName('nom-categorie-coureur')[0].textContent = runner.categorie;
        newRunner.getElementsByClassName('licence')[0].textContent = runner.num_licence;
        newRunner.getElementsByClassName('insee')[0].textContent = runner.code_insee;

        newRunner.style.display = 'block';

        parent.appendChild(newRunner);
    });

    /*
    var text="";
    runners.forEach(function (element) {
        console.log(element);
        text = '<div class="fiche-coureur" id="fiche-coureur-modele"><div class="first-row"><span class="nom-coureur">'+element['nom']+' '+element['prenom']+'</span><span class="categorie-coureur">(<span class="categorie-coureur-value">'+element['categorie_categorie_valeur']+'</span>)</span><button class="modifier-coureur" id="modify">modifier</button></div><div class="second-row"><div><img class="icon-coureur" src="../img/mail.png"><span class="info-coureur">'+element['mail']+'</span><div class="right-panel"><span class="info-italic-coureur">Numéro Licence: </span><span class="info-italic-coureur-value" id="licence">'+element['num_licence']+'</span></div></div><div><img class="icon-coureur" src="../img/trophy.png"><span class="info-coureur">'+element['categorie']+'</span><div class="right-panel"><span class="info-italic-coureur">Code INSEE : </span><span class="info-italic-coureur-value">'+element['code_insee']+'</span></div></div></div></div>';
        $('#runners').append(text);
    });
    */
}

ajaxRequest ('GET', '../api/coureurs.php', loadRunners);