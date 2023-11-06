import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {
  private authService : AuthService;
  private router : Router;

  constructor(authService : AuthService, router : Router) { 
   this.authService = authService;
  this.router = router;
  }


  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isLoggedIn().pipe(isLoggedIn => isLoggedIn || this.router.createUrlTree(['']))
  }
}
