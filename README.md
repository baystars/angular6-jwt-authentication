# AngularJWTAuthentication

## 概要

* バックエンドはFlask(jwt)
* 認証に成功したらユーザリスト表示に移動まではできているが
* 認証していなくてもユーザリストは見える(auth-guradを使うべきか)
* というかオリジナルもそんな作り
* interceptorの使い方がいまいちわからない
* sessionStrageを使っている(localStrageでない)
    - sessionStrage: ウィンドウを閉じるまで有効
    - localStrage: ウィンドウを閉じた後も有効(Cookieに似ている)
* 元は example/only2dhir/angular-5-material-desgin

## リンク

* [Angular 5 JWT Authentication\(Full Stack\) \| DevGlan](https://www.devglan.com/spring-security/angular-jwt-authentication)
* [GitHub \- only2dhir/angular\-5\-material\-design: This tutorial is about creating a sample application using angular 5 material design\.To develop this app we will be using different angular 5 material components such as form controls, navigation menu, layout and buttons\.](https://github.com/only2dhir/angular-5-material-design)

## 作成

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

## 参考

check by curl

    $ curl -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"username":"test","password":"test"}' http://localhost:5000/api/v1.0/login/
