import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.css']
})
export class UserListeComponent implements OnInit {
  message = '';
  user?: User[];
  currentUser: User = {};
  currentIndex = -1;
  firstname= '';
  lastname='';
  email='';
  phone=0;
  isDeleted=false;
  isUpdated=false;

  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveUser();
    this.message = '';
  }

  retrieveUser(): void {
    this.userService.getAll()
      .subscribe(
        (data : any)=> {
          this.user = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.userService.deleteAll()
      .subscribe(
        (response: any) => {
          console.log(response);
          this.refreshList();
          this.isDeleted=true;
        },
        (error: any) => {
          console.log(error);
          this.isDeleted=false;
        });
  }
  deleteUser(): void {
    this.message = '';
    this.userService.delete(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/users']);
          this.message = response.message ? response.message : 'This user was deleted successfully!';
          this.isDeleted=true;
        },
        error => {
          console.log(error);
          this.isDeleted=false;
        });
  }

  

}

