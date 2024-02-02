import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clinicInfo: any = {
    introHeadingUpper: 'Compassionate Care',
    introHeadingLower: 'For Your Furry Friends',
    introText: 'Every visit to our veterinary clinic is a commitment to providing top-notch care for your pets. We start with a thorough examination and use locally sourced, high-quality treatments. Your pet\'s well-being is our priority, and we guarantee a comforting experience!',
    buttonText: 'Schedule an Appointment'
  };
  
  products = [
    { imageUrl: 'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExfHx8ZW58MHx8fHx8&w=1000&q=80', name: 'Physical Exams', price: '₱2200.00 - ₱2500.00' },
    { imageUrl: 'https://bulverdeanimalhospital.com/wp-content/uploads/bb-plugin/cache/puppy-vaccination-square-1643c5cb83260ec6214a159502c5df4c-nl41mhcprysz.jpg', name: 'Vaccine Shot', price: '₱840.00 - ₱1500.00' },
    { imageUrl: 'https://intriquip.com/wp-content/uploads/xray-equine-square-1.png', name: 'X-ray', price: '₱3500.00 - ₱5000.00' },
    { imageUrl: 'https://vetmed.oregonstate.edu/sites/vetmed.oregonstate.edu/files/img_5030_edit_web_square.jpg', name: 'Wound Treatment', price: '₱44,000.00 - ₱50,000.00' },
  ];
}
