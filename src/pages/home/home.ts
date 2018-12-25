import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { NatureViewService } from '../../services/natureView.service';
import { NatureView } from '../../models/NatureView.model';
import { NewViewPage } from '../new-view/new-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  natureViewList: NatureView[];
  natureViewSubscription: Subscription;
  newViewPage: NewViewPage;

  constructor(public navCtrl: NavController,
    private natureViewService: NatureViewService) {
  }

  ngOnInit() {
    this.natureViewSubscription = this.natureViewService.natureViewList$.subscribe(
      (natureViews: NatureView[]) => {
        this.natureViewList = natureViews;
      }
    );
    this.natureViewService.emitList();
  }

  onLoadNatureView(view: NatureView) {

  }

  ngOnDestroy() {
    this.natureViewSubscription.unsubscribe();
  }
}
