import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  arabicToRoman(arabic: number): String {
    var romanNumber = "";
    var resto = arabic;
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
    }
    return romanNumber;
  }

}
