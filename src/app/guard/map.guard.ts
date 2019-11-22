import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MapGuard implements CanActivate {
  constructor(
    @Inject(Storage) private storage: Storage,
    private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const isPlaceId = await this.storage.get('placeId');
    if (isPlaceId) {

      this.router.navigateByUrl('/registration');
    }

    return true;

  }
}