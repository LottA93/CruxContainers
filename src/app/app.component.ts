import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}
  title = 'app';
  url = '';
  my_data: any


  getNextMeme() {
    this.url = this.my_data.data.children[Math.floor(Math.random() * this.my_data.data.children.length)].data.url
  }

  ngOnInit() {
    this.http.get("https://www.reddit.com/r/programmerhumor/search.json?q=memes&limit=100")
      .subscribe(data => { 
        this.my_data = data
        console.log(this.my_data)
        this.url = this.my_data.data.children[Math.floor(Math.random() * this.my_data.data.children.length)].data.url
        
      })


  }

  

}
