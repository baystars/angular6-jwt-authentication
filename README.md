# AngularJWTAuthentication

[Angular 5 JWT Authentication\(Full Stack\) \| DevGlan](https://www.devglan.com/spring-security/angular-jwt-authentication)

[GitHub \- only2dhir/angular\-5\-material\-design: This tutorial is about creating a sample application using angular 5 material design\.To develop this app we will be using different angular 5 material components such as form controls, navigation menu, layout and buttons\.](https://github.com/only2dhir/angular-5-material-design)


ng

    $ ng new angular-JWT-Authentication
    $ cd angular-JWT-Authentication
    
npm

    $ npm i --save @angular/material @angular/cdk
    $ npm i --save @angular/animations

see

* src/style.css
* src/main.ts
* src/index.html

generate component

    $ ng g c component/login
    $ ng g c component/user

generate service

    $ ng g s service/auth
    $ ng g s service/user
    $ ng g s service/token

generate module

    $ ng g m core/material
    $ ng g m app-routing --flat --module=app
