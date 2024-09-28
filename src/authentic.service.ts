import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./app/book/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'  
})


export class AuthenticationGuard implements CanActivate {
    constructor(private auth:AuthService, private route: Router){}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.auth.isLoggedIn()){
          return true;
        }else{
          this.route.navigate(["login"]);
          return false;
        }
        
    }
    
  }