Auteurs :
	- Aurélien SIMON
	- Aubane LECORCHET

Choses à savoir :
	- dossier CONF : fichiers de configurations des virtual hosts
			 Merci de bien vouloir changer les chemins vers le front et l'api

	/!\ MERCI DE BIEN VOUS ASSURER QUE LES HEADERS CI-DESSOUS SOIENT BIEN PRESENTS DANS L'API/!\
		
		Header set Access-Control-Allow-Origin "*"
		Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
		Header set Access-Control-Allow-Headers "*"

		-----------------------------------------------------------------------------

	- dossier API : fichiers php, du renvoi json

	/!\ SI VOUS SOUHAITEZ CHANGER LES CONSTANTES, MERCI DE BIEN VOULOIR MODIFIER LE FICHIER constants.php /!\

	- dossier FRONT : tous les fichiers html, les images, javascripts et CSS

	- dossier SQL : contient la base de données à insérer dans phpmyadmin