import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  message = '';
  currentIndex = -1;
  isDeleted=false;
  currentUser: User = {
    firstname: '',
    lastname: '',
    email: '',
    phone: 0
  };
  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id);
    this.message = '';
  }
  
  getUser(id: string): void {
    this.userService.get(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


 
  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
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
