function loadRunners (runners) {
    var text="";
    //var name = document.getElementById('name');
    runners.forEach(function (element) {
        console.log(element);
        text += '<div class="fiche-coureur" id="fiche-coureur-modele" style="display:none"><div class="first-row"><span class="nom-coureur" id="name">'+element['nom']+' '+element['prenom']+'</span><span class="categorie-coureur" id="category_value">(<span class="categorie-coureur-value">'+element['categorie_categorie_valeur']+'</span>)</span><button class="modifier-coureur" id="button">modifier</button></div><div class="second-row"><div><img class="icon-coureur" src="../img/mail.png"><span class="info-coureur" id="mail">'+element['mail']+'</span><div class="right-panel"><span class="info-italic-coureur">num licence:</span><span class="info-italic-coureur-value" id="licence">'+element['num_licence']+'</span></div></div><div><img class="icon-coureur" src="../img/trophy.png"><span class="info-coureur" id="category">'+element['categorie']+'</span><div class="right-panel"><span class="info-italic-coureur">code INSEE:</span><span class="info-italic-coureur-value" id="code">'+element['code_insee']+'</span></div></div></div></div>';
    });
    $('#runners').html(text);
}

ajaxRequest ('GET', '../../api/coureurs.php',loadRunners);