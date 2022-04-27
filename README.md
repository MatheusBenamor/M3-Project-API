# M3-Project-API


<img src="https://res.cloudinary.com/dqycgj4fq/image/upload/v1651003678/swot-analys-13_ycxkji.png" alt="SWOT COVER" />

(Explicação do projeto)

Frontend Repository: [Client Repository](https://github.com/MatheusBenamor/M3-Project-CLIENT).

## Technologies

- [HTML] - [CSS] - [Javascript] - [React] - [Node] - [Cloudinary] - [MongoDB] - [Axios] - [GIT] - [Heroku]

## Public Routes

<b>Authentication routes</b> - Allows the user to create an account in DataBase and log into the app.

Method | Endpoint | Payload | Response | Action |
--- | --- | --- | --- |--- |
POST | /auth/signup | { "email": string,"password": string,"name": string } | { user } | Creates a new user in DB |
POST | /auth/login | { "email": string, "name": string } | { user,token } | User can access the plataform |

## Private Routes

<b>User routes</b> - Users can get your informations and also update and change their password or profile image.

Method | Endpoint | Payload | Response | Action |
--- | --- | --- | --- |--- |
GET | /user/:userId	 | - | { user } | Get a user from DB |
PUT | /user/:userId | { password: { type: String, required: true }, newPassword: { type: String, required: true } | { user,token } | User udpate your password |
PUT | /user/:userId | { { "image": image } } | { user,token } | User can update your profile image |

<b>Analysis routes</b> - Allow users to create new analysis, update or delete them.

Method | Endpoint | Payload | Response | Action |
--- | --- | --- | --- |--- |
GET | /analysis | - | [analysis] | Get all user analysis from DB |
POST | /analysis | { "email": string, "name": string } | { user,token } | User can create a new analysis |
PUT| /analysis/:analysisId | { "email": string, "name": string } | { user,token } | User can update an analysis |
DELETE | /analysis/delete | { "email": string, "name": string } | { user,token } | Delete analysis |

<b>Feedback routes</b> - Depending on the analysis results, the application will return a feedback based on the analysis risks.
Method | Endpoint | Payload | Response | Action |
--- | --- | --- | --- |--- |
 | - | - | - | - |
