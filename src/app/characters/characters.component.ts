import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  personajes: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
      .subscribe(
        result => {
          this.personajes = result;
        }
      )
  }

}
