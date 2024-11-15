import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import path from 'path';
import { Component } from '@angular/core';
import { ListCardOfEntriesComponent } from './list-ui/list/list-card-of-entries.component';

export const routes: Routes = [
  {path: '', component: ListPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'card', component: ListCardOfEntriesComponent}
];
