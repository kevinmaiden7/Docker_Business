import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  arabicToRoman(arabic: number): String {
    var romanNumber = "";
    /*var resto = arabic;
    if (arabic == 5) {
      romanNumber = "V";
      resto = 5 - arabic;
    }
    if (arabic == 4) {
        romanNumber = "IV"
        resto = 4 - arabic;
    };
    if(resto != 0){
      for(let i=1; i<resto + 1; i++){
        romanNumber = romanNumber.concat("I");
      }
    }*/
    var letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (var i = 0; i < letters.length; i++) {
      while (arabic >= numbers[i]) {
        romanNumber = romanNumber.concat(letters[i]);
        arabic -= numbers[i];
      }
    }
    return romanNumber;
  }

}
