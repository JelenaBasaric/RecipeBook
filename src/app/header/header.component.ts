import { Component } from '@angular/core';
import { DataStorage } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorage:DataStorage){}
  collapsed = true;
  onSaveData(){
    this.dataStorage.storeRecipes();
  }
  onFetchData(){
    this.dataStorage.fetchRecipes();
  }

}
