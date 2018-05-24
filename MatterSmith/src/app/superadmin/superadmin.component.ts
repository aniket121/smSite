import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { SuperAdminService } from './superadmin.service';
import { RouterModule, Router } from '@angular/router';
import * as _ from 'lodash'; 
@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.scss']
})
export class SuperadminComponent implements OnInit {

  listUsers:string ='';
  userRoles:string = '';
  public msgs:any=[];
  public modal_title:string = "";
  public deleteuserid={}
  public showDialog:boolean = false;//modal status
  public deleteDialog:boolean =false;
  public userID:any;
  public user={};
  public userd={};
  public duplicate_users:any;
  public all_users:any =  {};
  public role_status:boolean =false;
  public transactions: {
    id :number,
    action:any,
    username: string,
    first_name: string,
    last_name:string,
    email:string,
    is_active:string,
    userlimit__userlimit:string

  }[];
  
  onlineuser :any = [];
  userStaus:any=[]
  public userObject=<any>{};
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  currentUser:any=[];
  constructor(private router: Router,private superadminService : SuperAdminService) {

   }

  ngOnInit() {

       this.superadminService.getAdmin().subscribe((res: any) => {

            
          
           this.currentUser.push(res);
           for(var i=0;i<res.data.length;i++)
           {
                 console.log('innn',res.data);
                 this.transactions =res.data;
                
              
            }, error => {
               
                console.info('error', error);

                
            })

      console.log(this.currentUser)
      

       this.onlineuser = []
       this.onlineuser.push({label: 'All', value:null});
       this.onlineuser.push({label: 'online', value: 'online'});
       this.onlineuser.push({label: 'offline', value: 'offline'});
       this.userStaus=[];
       this.userStaus.push({label: 'active', value: 'active'});
       this.userStaus.push({label: 'Inactive', value: "Inactive"});
       this.myOptions = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
        ];
        this.duplicate_users =  _.cloneDeep(this.transactions);
  }
  
 onChange() {
        console.log(this.optionsModel);
        

    }
  showSuccess(recordStatus) {
    this.msgs =[{severity:'success', summary:recordStatus}];
  }
  addUser(){
    this.userObject ={};
    this.showDialog = !this.showDialog;
    this.modal_title = "Add User";
  }
  
  saveUser(){
    
   
      var role = <any>{};
     this.userObject.role=this.optionsModel
     console.log('---------userdata---------',this.userObject)
      this.superadminService.addAdmin(this.userObject).subscribe((res: any) => {

            
            if(res.success=="true")
            {
                this.showSuccess('Admin has been added successfully');
                 this.showDialog =false;   

            }
            this.ngOnInit()
              
            }, error => {
               
                console.info('error', error);

                
            })
     
   
  }


  delete(data,position){
    this.modal_title = "Delete User";
    this.deleteDialog = true;//modal status
    this.userID=data.id;
   
  }
  deleteUser(email:any){
     this.showSuccess('User has been deleted');
     this.deleteDialog =false; 
     this.deleteuserid.user_id=this.userID
      this.superadminService.deleteUserapi(this.deleteuserid).subscribe((res: any) => {

            
            if(res.success=="true")
            {
                this.showSuccess('Admin has been added successfully');
                 this.showDialog =false;   

            }
            this.ngOnInit()
              
            }, error => {
               
                console.info('error', error);

                
            })
       

  }

  edit(data,position){
    this.modal_title = "Edit User";
    this.userObject = data;
    this.showDialog = true;    
  }
  userStatus($event){
    this.transactions = this.duplicate_users;
    let element = event.currentTarget as HTMLInputElement;
    let value = element.value;
    if(value == '1'){
      var online = [];
      for(let i in this.transactions){
        if(this.transactions[i]['online'] == 'online'){
          online.push(this.transactions[i])          
        }
      }
      this.transactions = online;     
    }
    else if(value == '2'){
      var offline = [];
      for(let i in this.transactions){
        if(this.transactions[i]['online'] == 'offline'){
          offline.push(this.transactions[i])          
        }
      }
      this.transactions = offline;
    }
  }


  

}
