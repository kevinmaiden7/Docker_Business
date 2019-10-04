import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from '../roman-numerals.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  romanNumber: String = "";

  constructor(
    private romanNumeralsService: RomanNumeralsService
  ) { }

  ngOnInit() {
    this.romanNumber = "Welcome!";
  }

  convertNumber(number){
    this.romanNumber = this.romanNumeralsService.arabicToRoman(number);
  }

}
