function addOptions (courses) {
    let datalist = document.getElementById('dropdown-liste-courses');

    courses.forEach(course => {
        let option = document.createElement('option');
        option.value = course.libelle;
        option.innerText = course.libelle;
        datalist.appendChild(option);
    });
}

function showResults (results) {
    let t = document.getElementById('table-result');

    while(t.firstChild) t.removeChild(t.firstChild);

    let header = document.createElement('tr');
    let headersTitles = ['Mail', 'Place', 'Dossard', 'Points', 'Temps'];

    for (let h of headersTitles) {
        let th = document.createElement('th');
        th.innerText = h;
        header.appendChild(th);
    }
    t.appendChild(header);

    results.forEach(participant => {
        let row = document.createElement('tr');
        
        for(var info in participant) {
            if (info == 'id') continue;

            let td = document.createElement('td');
            td.innerText = participant[info];
            row.appendChild(td);
        }

        t.appendChild(row);
    });
}

function getTarget () {
    let target = document.getElementById('dropdown-liste-courses').options[document.getElementById('dropdown-liste-courses').selectedIndex].value;
    ajaxRequest ('GET', 'http://prj-cir2-web-api.monposte/request.php/getResult', showResults);
}

ajaxRequest ('GET', 'http://prj-cir2-web-api.monposte/request.php/racing', addOptions);