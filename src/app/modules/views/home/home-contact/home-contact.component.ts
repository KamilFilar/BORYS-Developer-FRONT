import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/config/services/contact.service';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: [
    './home-contact.component.scss',
    '../../../../../assets/styles/material.scss'
  ]
})
export class HomeContactComponent implements OnInit {

  contactText = 'Kontakt';
  sendBtnText = 'Wyślij';
  modalTittle = '';
  modalMsg = '';

  constructor(
    private contactService: ContactService
  ) { }

  sendMsg() {
    this.modalTittle = '';
    this.modalMsg = '';
    
    let subject;
    let stringName = document.getElementsByTagName("input")[4].value;
    let emailAddres = document.getElementsByTagName("input")[5].value;
    let phoneNumber = document.getElementsByTagName("input")[6].value;
    let content = document.getElementsByTagName("textarea")[0].value;  

    const arrayName = stringName.split(" ");
    if(arrayName[0]=='' || arrayName[1]=='')
    {
      this.modalTittle = 'Wiadomość nie została wysłana!';
      this.modalMsg = 'Wpisz poprawnie imię i nazwisko (rozdzielone spacją)';
    }
    else if(emailAddres=='' || !emailAddres)
    {
      this.modalTittle = 'Wiadomość nie została wysłana!';
      this.modalMsg = 'Adres email jest wymagany!';
    }
    else if (this.validateEmail(emailAddres)==false){
      this.modalTittle = 'Wiadomość nie została wysłana!';
      this.modalMsg = 'Podaj poprawny adres email!';
    }
    else if(phoneNumber=='' || !phoneNumber)
    {
      this.modalTittle = 'Wiadomość nie została wysłana!';
      this.modalMsg = 'Telefon kontaktowy jest wymagany!';
    }
    else if(this.validatePhone(phoneNumber)==false) { 
      this.modalTittle = 'Wiadomość nie została wysłana!';
      this.modalMsg = 'Podaj poprawny numer telefonu!';
    }
    else if(content=='' || !content)
    {
      this.modalTittle = 'Wiadomość nie została wysłana!';
      this.modalMsg = 'Treść wiadomości jest wymagana!';
    }
    else 
    {
      content += ' Pełne dane wysłane przez osobę: '+ stringName;
      subject = 'BorysNieruchomosci - ' + arrayName[0] + ' ' + arrayName[1];
      this.contactService.sendEmail(emailAddres, arrayName[0], arrayName[1], phoneNumber, subject, content)
      this.modalTittle = 'Wiadomość została wysłana!';
      this.modalMsg = 'Postaramy się skontaktować możliwie jak najszybciej, pozdrawiamy!'
    }
  }

  validateEmail(email: string){
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  validatePhone(phone: string) {
    const regexDigits = /\d/;
    if(regexDigits.test(phone)==true && phone.length==9)
    {
      return true;
    }
    else 
    {
      const regex = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
      return regex.test(phone);
    }
  }

  ngOnInit(): void {
  }

}
