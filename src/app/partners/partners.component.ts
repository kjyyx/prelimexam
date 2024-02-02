// partners.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  veterinaryPartners = [
    {
      name: 'Shepherd Animal Clinic',
      imageSrc: 'assets/img/products-01.jpg',
      description: 'Shepherd Animal Clinic in San Jose del Monte, Bulacan, and nearby areas is a top veterinary choice in the Philippines. They offer in-house pet supplies, grooming for cats and dogs, and expert animal care services with a diagnostic lab and imaging technology.',
      address: 'Florinda Building, Quirino St, San Jose del Monte City, 3023 Bulacan',
      phone: '(+04) 4307 4809',
      email: 'shepherdanimalclinic@gmail.com',
      website: 'https://www.facebook.com/shepherdanimalclinicmain/',
      alignment: 'right'
    },
    {
      name: 'Philippine Animal Medical Center',
      imageSrc: 'assets/img/products-02.jpg',
      description: 'Philippine Animal Medical Center, a leading vet in the Philippines, encourages online appointments for personalized pet care. Their clean clinic provides comprehensive facilities for accurate animal diagnoses. Owners can relax with free WiFi in the reception area.',
      address: '168 RV Mansion Bldg. E. Rodriguez Jr. Ave, Quezon City, Philippines',
      phone: '(+63) 995 405 5146',
      email: 'philamedc@gmail.com',
      website: 'https://www.facebook.com/PhilAMedC',
      alignment: 'left'
    },
    {
      name: 'Pet House Veterinary Hospital & Clinics',
      imageSrc: 'assets/img/products-03.jpg',
      description: 'Pet House Pet Clinic & Grooming Center, with six branches in Quezon City, offers full-service grooming and animal care. Their services focus on preventing and detecting serious conditions, ensuring the well-being of your pets. Emergency facilities include a surgery room and laboratory.',
      address: '131 V. Luna Rd. Ext. Sikatuna Village, Quezon City, Philippines',
      phone: '(+02) 7255-5077',
      email: 'the.pethouseinc@gmail.com',
      website: 'https://www.facebook.com/pethousepetclinic/',
      alignment: 'right'
    }
  ];
}
