import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { RouterModule, Router } from '@angular/router';
import * as _ from 'lodash'; 
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[AdminService]
})
export class AdminComponent implements OnInit {

   listUsers:string ='';
  userRoles:string = '';
  public msgs:any=[];
  public modal_title:string = "";

  public showDialog:boolean = false;//modal status
  public deleteDialog:boolean =false;
  public deleteuserid={user_id:''}
  public user={};
  public userd={};
  public duplicate_users:any;
  public useraddSatus:boolean=false;
  public all_users:any =  {};
  public role_status:boolean =false;
  public hidePasswordField:boolean =false;
  public userID:any;
  public transactions: {
    id :number,
    action:any,
    userobject__first_name: string,
    userobject__last_name: string,
    userobject__username:string,
    userobject__email:string,
  }[];
  
  onlineuser :any = [];
  userStaus:any=[]
  public userObject=<any>{};
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  constructor(private router: Router,public AdminService:AdminService) {

   }

  ngOnInit() {

      
      this.AdminService.getAdminusers().subscribe((res: any) => {

              console.log(res)
              for(var i=0;i<res.data.length;i++){
                 this.transactions =res.data

               }  
   
            
              
            }, error => {
               
                console.info('error', error);

                
            })
 
        
    

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
    this.hidePasswordField=true;
    this.userObject ={};
    this.showDialog = !this.showDialog;
    this.modal_title = "Add User";
  }
  
  saveUser(){
    
   
      var role = <any>{};
     this.userObject.role=this.optionsModel
     console.log('---------userdata---------',this.userObject)
      var admin_id=localStorage.getItem("admin_id");
      this.userObject.adminid=admin_id;
       this.AdminService.addAdmin(this.userObject).subscribe((res: any) => {

           

            if(res.success=="true")
            {
                this.showSuccess('User has been added successfully');
                 this.showDialog =false;   


            }
             this.ngOnInit();
              
            }, error => {
               
                console.info('error', error);

                
            })
      }
   
  


  delete(data,position){
    this.modal_title = "Delete User";
    this.deleteDialog = true;//modal status
     this.userID=data.userobject__id;
     console.log(data)
  }
  deleteUser(){
     this.showSuccess('User has been deleted');
     this.deleteDialog =false;   
  }

  edit(data,position){
    this.hidePasswordField=false;
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
 deleteUsers(email:any){
     this.showSuccess('User has been deleted');
     this.deleteDialog =false; 
     this.deleteuserid.user_id=this.userID
     console.log(this.deleteuserid)
      this.AdminService.deleteUserapi(this.deleteuserid).subscribe((res: any) => {

            
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




}
