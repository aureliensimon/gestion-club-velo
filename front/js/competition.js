function addOptions (courses) {
    let datalist = document.getElementById('dropdown-liste-courses');

    courses.forEach(course => {
        let option = document.createElement('option');
        option.value = course.id;
        option.innerText = course.libelle;
        datalist.appendChild(option);
    });
}

function showParticipantResult (participantInfos, participant) {
    let t = document.getElementById('table-result');
    let row = document.createElement('tr');

    let headersTitles = ['Nom Prénom', 'Club', 'License', 'Catégorie', 'Place', 'Dossart', 'Points', 'Temps'];
    
    console.table(participant);

    for (let title of headersTitles) {
        let td = document.createElement('td');
        switch (title) {
            case 'Nom Prénom':
                td.innerText = participantInfos[0].nom + ' ' + participantInfos[0].prenom;
                break;
            case 'Club':
                td.innerText = participantInfos[0].club;
                break;
            case 'License':
                td.innerText = participantInfos[0].num_licence;
                break;
            case 'Catégorie':
                td.innerText = participantInfos[0].categorie;
                break;
            case 'Place':
                td.innerText = participant.place;
                break;
            case 'Dossart':
                td.innerText = participant.dossart;
                break;
            case 'Points':
                td.innerText = participant.point;
                break;
            case 'Temps':
                td.innerText = participant.temps;
                break;
            default:
                td.innerText = 'a';
        }
        console
        row.appendChild(td);
    }

    t.appendChild(row);
}

function showResults (results) {
    let t = document.getElementById('table-result');

    while(t.firstChild) t.removeChild(t.firstChild);

    let header = document.createElement('tr');
    let headersTitles = ['Nom Prénom', 'Club', 'License', 'Catégorie', 'Place', 'Dossart', 'Points', 'Temps'];

    for (let h of headersTitles) {
        let th = document.createElement('th');
        th.innerText = h;
        header.appendChild(th);
    }
    t.appendChild(header);

    results.forEach(participant => {
        ajaxRequest('GET', 'http://prj-cir2-web-api.monposte/request.php/runner/?mail=' + participant.mail, showParticipantResult, null, participant);
    });
}

function getTarget () {
    let target = document.getElementById('dropdown-liste-courses').options[document.getElementById('dropdown-liste-courses').selectedIndex].value;
    ajaxRequest ('GET', 'http://prj-cir2-web-api.monposte/request.php/getResult/?course=' + target, showResults);
}

ajaxRequest ('GET', 'http://prj-cir2-web-api.monposte/request.php/racing', addOptions);