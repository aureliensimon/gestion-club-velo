let parent = document.getElementById('liste-coureurs');
let model = document.getElementById('fiche-coureur-modele');
    
while(parent.firstChild) parent.removeChild(parent.firstChild);

for (let i = 0; i < 8; i++) {
    let modelClone = model.cloneNode(true);
    modelClone.style.display = 'block';

    parent.appendChild(modelClone);
};