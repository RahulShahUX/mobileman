# React Mobile Comparison App

![Logo](./frontend/public/logo.svg)

## Table of Contents
- [Introduction](#introduction)
- [Login](#login)
- [Signup](#signup)
- [Mobile List - Admin](#mobile-list---admin)
- [Mobile Add](#mobile-add)
- [Mobile Edit](#mobile-edit)
- [Mobile List - User](#mobile-list---user)
- [Mobile Compare](#mobile-compare)
- [Logout](#logout)

## Introduction
The **React Mobile Comparison App** is a web application that allows users to compare different mobile phones based on their specifications. The app provides a user-friendly interface for browsing and comparing the details of various mobile devices. There are two interfaces: Admin and User.

## Login
![Login](./frontend/public/ss/SS1.png)
This is a Login Page. The Admin and User can log in from the same login page and see the pages and content based on their permissions.

## Signup
![Signup](./frontend/public/ss/SS2.png)
This is a Signup Page. The User will sign up after filling out the form. The roles will be managed from the database as of now.

## Mobile List - Admin
![Mobile List - Admin](./frontend/public/ss/SS3.png)
This is a Mobile Listing page for Admin. Admin can manage the mobile listing by adding, editing, or deleting the mobile.

## Mobile Add
![Mobile Add](./frontend/public/ss/SS4.png)
This is an Add Mobile form that will show once the Admin clicks the Add Mobile button. Admin will fill in all the mobile information and save the form so the mobile will be added to the mobile listing page.

## Mobile Edit
![Mobile Edit](./frontend/public/ss/SS5.png)
This is an Edit Mobile form that will show once the Admin clicks the Edit Icon. Admin will edit the mobile information and save the form so the mobile will be edited on the mobile listing page.

## Mobile Delete
![Mobile Delete](./frontend/public/ss/SS3.png)
Admin can delete the mobile by clicking on the Delete icon on the mobile list page.

## Mobile List - User
![Mobile List - User](./frontend/public/ss/SS7.png)
This is a Mobile Listing page for Users. Users can select the mobile item that they want to compare.

![Mobile List - User Selected](./frontend/public/ss/SS8.png)
The mobile items "Select" button will show as "Selected" once the user selects any mobile to compare and the "Compare Mobile" button will be visible once the user selects 2 mobiles for comparison. The user will be redirected to the Mobile Compare page.

## Mobile Compare
![Mobile Compare](./frontend/public/ss/SS9.png)
This is a Mobile Compare page. Users can compare 2 mobiles.

## Logout
![User Logout](./frontend/public/ss/SS6.png)
Users can see the Logout button once they click on the User Name and Role dropdown. After clicking the logout button the user will be logged out and will be redirected to the login page.
