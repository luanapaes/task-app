import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { getTask } from './shared/resolvers/getTask.resolver';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'task/:id',
        resolve: {
            task: getTask
        },
        component: HomeComponent
    }
];
