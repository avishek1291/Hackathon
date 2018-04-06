import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post={
    isFavorite:true
  }
  tweet={
    likecount:5,
    isliked :true
  }
  onFavoriteChanged(eventsArgs){
    console.log('favorite chaged',eventsArgs)
  }
}
