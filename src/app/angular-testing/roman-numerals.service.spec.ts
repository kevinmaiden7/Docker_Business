import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service).toBeTruthy();
  });

  it('1 debe ser igual a I', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(1)).toEqual("I");
  });

  it('2 debe ser igual a II', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(2)).toEqual("II");
  });

  it('3 debe ser igual a III', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(3)).toEqual("III");
  });

  it('4 debe ser igual a IV', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(4)).toEqual("IV");
  });

  it('5 debe ser igual a V', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(5)).toEqual("V");
  });

  it('6 debe ser igual a VI', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(6)).toEqual("VI");
  });

  it('9 debe ser igual a IX', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(9)).toEqual("IX");
  });

  it('10 debe ser igual a X', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(10)).toEqual("X");
  });

  it('20 debe ser igual a XX', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(20)).toEqual("XX");
  });

  it('40 debe ser igual a XL', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(40)).toEqual("XL");
  });

  it('80 debe ser igual a LXXX', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(80)).toEqual("LXXX");
  });

  it('95 debe ser igual a XCV', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(95)).toEqual("XCV");
  });

  it('100 debe ser igual a C', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(100)).toEqual("C");
  });

  it('600 debe ser igual a DC', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(600)).toEqual("DC");
  });

  it('666 debe ser igual a DCLXVI', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(666)).toEqual("DCLXVI");
  });

  it('999 debe ser igual a CMXCIX', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(999)).toEqual("CMXCIX");
  });

  it('1000 debe ser igual a M', () => {
    const service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service.arabicToRoman(1000)).toEqual("M");
  });
});
