import { ToasterService } from "@abp/ng.theme.shared";
import { Component, OnInit } from '@angular/core';
import { CMSContenEntityDto } from "@proxy/services/dtos";
import { CMSContentEntityService } from "@proxy/services";
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {

  CMSContenItems: CMSContenEntityDto[];
  newNameText: string;
  newDescription : string;
  newtype:string;
  editorConfig: any = {
    height: '400px',
    // Other CKEditor configuration options
  };
  public Editor = ClassicEditor;
  constructor(
      private CMSContenService: CMSContentEntityService ,
      private router: Router,
      private toasterService: ToasterService)
  { }

  ngOnInit(): void {
    this.CMSContenService.getList().subscribe(response => {      
      this.CMSContenItems = response;      
    });
  }
  
  create(): void{
    this.CMSContenService.create(this.newNameText,this.newDescription).subscribe((result) => {
      this.CMSContenItems = this.CMSContenItems.concat(result);
      this.newNameText = null;
      this.newDescription=null;
      this.newtype=null;
    });
  }

  delete(id: string): void {
    this.CMSContenService.delete(id).subscribe(() => {
      this.CMSContenItems = this.CMSContenItems.filter(item => item.id !== id);
      this.toasterService.info('Deleted the todo item.');
    });
  } 

  navigateToDescription(id: string) {
   
    this.router.navigate(['/description', id]);
  }


}
