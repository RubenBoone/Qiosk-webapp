import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private lock :string = "tHIs_IS_0uR_w^Y_BR0, Just a whole RANDOM Text to HELp_Achieve WAT; W3 % Waùt , Too B^d TheRe) is S000 1iTT13 Tim3"

  constructor() { }
   encrypt( value:string){

    var password = value;
    var gibber = "fd656.he6/.";
    var gibber2 = 'g46758/*+';

    var charArray = password.split('');
    var reverseArray = charArray.reverse();
    var reversedArray = reverseArray.join('');
    var pwd = gibber2+ reversedArray + gibber;
    var x1=pwd.substring(13,pwd.length)
    var x2=pwd.substring(0,13)
    var x3 = x1+x2+"==";
    var x4=x3.substring(2,x3.length-2)+x3.substring(x3.length-2,x3.length)
    return x4;
  }
}


