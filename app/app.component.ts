import {Component} from '@angular/core';
import {CourseComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'my-app',
    template: `
        <h1>My first app</h1>
        <courses></courses>
        <authors></authors>
    `,
    directives: [CourseComponent, AuthorsComponent],
})
export class AppComponent { }
