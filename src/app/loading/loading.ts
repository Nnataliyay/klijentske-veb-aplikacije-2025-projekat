import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-loading',
    imports: [MatCardModule, NgIf],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading {

}
