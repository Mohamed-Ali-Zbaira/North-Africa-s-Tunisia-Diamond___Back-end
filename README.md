# Projet XYZ

Bienvenue dans le dépôt du projet XYZ ! Ce projet est une application web permettant de gérer des hôtels et des utilisateurs. Ci-dessous, vous trouverez des informations détaillées sur les fonctionnalités, la structure du code, et comment utiliser le projet.

## Fonctionnalités

### Gestion des Hôtels (`hotel.js`)

#### 1. Ajouter un hôtel
- **Endpoint:** `POST /hotel/ajout`
- **Description:** Ajoute un nouvel hôtel avec une image associée.
- **Paramètres requis:**
  - `image`: Image de l'hôtel (Type: File)
  - `title`: Nom de l'hôtel (Type: String)
  - `price`: Prix (Type: String)
  - `phone`: Numéro de téléphone (Type: String)
  - `description`: Description de l'hôtel (Type: String)
  - `avis`: Avis sur l'hôtel (Type: String)
  - `localisation`: Localisation de l'hôtel (Type: String)
- **Exemple d'utilisation:**
  ```bash
  curl -X POST -F "image=@path/to/image.jpg" -F "title=Nom de l'hôtel" -F "price=Prix" -F "phone=Numéro de téléphone" -F "description=Description de l'hôtel" -F "avis=Avis sur l'hôtel" -F "localisation=Localisation de l'hôtel" http://localhost:3000/hotel/ajout
2. Obtenir tous les hôtels
Endpoint: GET /hotel/all
Description: Récupère la liste de tous les hôtels.
Exemple d'utilisation:
bash
Copy code
curl http://localhost:3000/hotel/all
3. Obtenir un hôtel par ID
Endpoint: GET /hotel/getbyid/:id
Description: Récupère les détails d'un hôtel en fonction de son ID.
Paramètres requis:
id: ID de l'hôtel (Type: String)
Exemple d'utilisation:
bash
Copy code
curl http://localhost:3000/hotel/getbyid/ID_DE_L_HOTEL
4. Supprimer un hôtel
Endpoint: DELETE /hotel/supprimer/:id
Description: Supprime un hôtel en fonction de son ID.
Paramètres requis:
id: ID de l'hôtel à supprimer (Type: String)
Exemple d'utilisation:
bash
Copy code
curl -X DELETE http://localhost:3000/hotel/supprimer/ID_DE_L_HOTEL
5. Mettre à jour un hôtel
Endpoint: PUT /hotel/update/:id
Description: Met à jour les informations d'un hôtel en fonction de son ID.
Paramètres requis:
id: ID de l'hôtel à mettre à jour (Type: String)
image: Nouvelle image de l'hôtel (Type: File)
title: Nouveau nom de l'hôtel (Type: String)
price: Nouveau prix (Type: String)
phone: Nouveau numéro de téléphone (Type: String)
description: Nouvelle description de l'hôtel (Type: String)
avis: Nouvel avis sur l'hôtel (Type: String)
localisation: Nouvelle localisation de l'hôtel (Type: String)
Exemple d'utilisation:
bash
Copy code
curl -X PUT -F "image=@path/to/newimage.jpg" -F "title=Nouveau nom" -F "price=Nouveau prix" -F "phone=Nouveau numéro de téléphone" -F "description=Nouvelle description" -F "avis=Nouvel avis" -F "localisation=Nouvelle localisation" http://localhost:3000/hotel/update/ID_DE_L_HOTEL
Gestion des Utilisateurs (users.js)
1. Enregistrement d'un utilisateur
Endpoint: POST /users/register
Description: Permet à un utilisateur de s'enregistrer avec un nom, un email et un mot de passe.
Paramètres requis:
name: Nom de l'utilisateur (Type: String)
email: Adresse email de l'utilisateur (Type: String)
password: Mot de passe de l'utilisateur (Type: String)
Exemple d'utilisation:
bash
Copy code
curl -X POST -d "name=Nom" -d "email=email@example.com" -d "password=motdepasse" http://localhost:3000/users/register
2. Connexion d'un utilisateur
Endpoint: POST /users/login
Description: Permet à un utilisateur de se connecter avec son email et son mot de passe.
Paramètres requis:
email: Adresse email de l'utilisateur (Type: String)
password: Mot de passe de l'utilisateur (Type: String)
Exemple d'utilisation:
bash
Copy code
curl -X POST -d "email=email@example.com" -d "password=motdepasse" http://localhost:3000/users/login
3. Obtenir tous les utilisateurs
Endpoint: GET /users/getAll
Description: Récupère la liste de tous les utilisateurs enregistrés.
Exemple d'utilisation:
bash
Copy code
curl http://localhost:3000/users/getAll
4. Obtenir un utilisateur par ID
Endpoint: GET /users/getbyid/:id
Description: Récupère les détails d'un utilisateur en fonction de son ID.
Paramètres requis:
id: ID de l'utilisateur (Type: String)
Exemple d'utilisation:
bash
Copy code
curl http://localhost:3000/users/getbyid/ID_DE_L_UTILISATEUR
5. Supprimer un utilisateur
Endpoint: DELETE /users/delete/:id
Description: Supprime un utilisateur en fonction de son ID.
Paramètres requis:
id: ID de l'utilisateur à supprimer (Type: String)
Exemple d'utilisation:
bash
Copy code
curl -X DELETE http://localhost:3000/users/delete/ID_DE_L_UTILISATEUR
6. Mettre à jour un utilisateur
Endpoint: PUT /users/update/:id
Description: Met à jour les informations d'un utilisateur en fonction de
