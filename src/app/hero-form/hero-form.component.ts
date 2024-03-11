import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {


  powers = ['Super Fast Binkies', 'High Jumps',
            'Flops on Command', 'Super Cute'];

  model = new Hero(18, 'Peter Cottontail', this.powers[0], 'Bugs Bunny');

  submitted = false;

  onSubmit() { this.submitted = true; }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    console.log(`My hero id is ${myHero.id}`)
    return myHero;
  }

}