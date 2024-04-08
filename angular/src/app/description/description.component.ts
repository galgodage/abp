import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CMSContentEntityService } from "@proxy/services";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  description: string;


  constructor(private route: ActivatedRoute, private yourService: CMSContentEntityService) 
  {

    
  }

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.description = "dfgfdgdg"; // Handle case where id is not available
      return;
    }

    this.yourService.getList().subscribe(list => {
      if (!Array.isArray(list)) {
        this.description = "ffffffffff"; // Handle case where list is not an array
        return;
      }

      const item = list.find(item => item.id == id); 
      if (item) {
        this.description = item.description;
      } else {
        this.description = "hfdhfdhfdh"; // Handle case where item is not found
      }
    });
  }
}