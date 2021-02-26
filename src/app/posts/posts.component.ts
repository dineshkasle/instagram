import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myPost = [];

  constructor() {
  }

  ngOnInit(): void {
    this.myPost = [{
      imgUri: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
      userName: 'Dinesh Kasale',
      location: 'Mumbai, India',
      mainImgUrl: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
      likes: 1823,
      likeClass:'fa fa-heart-o '
    },
      {
        imgUri: "https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg",
        userName: 'Danny Castle',
        location: 'Delhi, India',
        mainImgUrl: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg',
        likes: 2500,
        likeClass:'fa fa-heart-o '
      }];
  }

  likePost(index){
    if(this.myPost[index].likeClass === 'fa fa-heart-o '){
      this.myPost[index].likeClass = 'fa fa-heart red';
    }else {
      this.myPost[index].likeClass = 'fa fa-heart-o ';
    }
  }

  likedPost(index){
    if(this.myPost[index].likeClass === 'fa fa-heart-o '){
      this.myPost[index].likeClass = 'fa fa-heart red';
    }else {
      this.myPost[index].likeClass = 'fa fa-heart-o ';
    }
  }

}
