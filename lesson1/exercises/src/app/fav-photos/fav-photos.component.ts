import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Things';
  image1 = 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1381/posts/35536/final_image/pastel%20color%20codes%20tutorial%20main%20preview.jpg';
  image2 = 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/pineapple-opener.jpg';
  image3 = 'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/Quesabirria_Tacos.jpg';

  constructor() { }

  ngOnInit() {
  }

}