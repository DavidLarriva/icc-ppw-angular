import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentsDetailPage } from './features/students/pages/student-detail-page/student-detail-page';

export const routes: Routes = [
    {
        path: '',component: HomePage
    },
    {
        path: 'students', component: StudentsPage
    },
    {
        path: 'students/:id', component: StudentsDetailPage
    },
    //Redireccionamiento
    {
        path: '**', redirectTo: ''
    }
    //Podemos redireccionar a algun error 404

];
