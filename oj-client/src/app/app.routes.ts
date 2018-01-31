import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'newproblem',
        component: NewProblemComponent
    },
    {
        path: 'problems',
        component: ProblemListComponent
    },
    {
        path: 'problems/:id',
        component: ProblemDetailComponent
    },
    {
        path: '404',
        component: PagenotfoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

export const routing = RouterModule.forRoot(routes);