import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './services/AuthguardService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardService, private router: Router) {} 
  canActivate():boolean 
  {
   if (!this.Authguardservice.gettoken()) {  
     this.router.navigateByUrl("/signin");  
 }  
 return this.Authguardservice.gettoken();  
}
  
}
