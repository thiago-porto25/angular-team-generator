import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people: string[] = [];
  teams: string[][] = [];
  teamNumber: number = 0;
  newName = '';
  errorMsg = '';

  onNewPersonInput(value: string) {
    this.newName = value;
  }

  onTeamNumberInput(value: string) {
    this.teamNumber = parseInt(value, 10);
  }

  addPerson() {
    this.errorMsg = '';

    if (this.newName) {
      this.people.push(this.newName);
      this.newName = '';
      return;
    }

    this.errorMsg = 'Please enter a name';
  }

  generateTeams() {
    this.errorMsg = '';

    if (this.teamNumber) {
      if (this.teamNumber > this.people.length) {
        this.errorMsg = 'Teams number is bigger than number of players';
        return;
      }

      const randomPeople = this.people.sort(() => Math.random() - 0.5);
      let currentTeam = 0;

      randomPeople.forEach((person) => {
        this.teams[currentTeam] = this.teams[currentTeam] || [];
        this.teams[currentTeam].push(person);
        currentTeam = currentTeam + 1 <= this.teamNumber ? currentTeam + 1 : 0;
      });

      this.people = [];
      return;
    }

    this.errorMsg = 'Please enter a valid number';
  }
}
