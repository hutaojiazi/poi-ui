import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocationService } from '../services/LocationService';
import { AuthenticationService } from '../services/AuthenticationService';
import { Location, LocationReview } from '../models/location.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) { }

  public location: Location;

  public newReview: LocationReview = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public formVisible: boolean = false;
  public formError: string;

  public googleAPIKey: string = 'google_map_api_key';

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('locationId')
          return this.locationService.getLocationById(id);
        })
      )
      .subscribe((location: Location) => {
        this.location = location;
        this.pageContent.header.title = location.name;
        this.pageContent.sidebar = `${location.name} is on Wonder Lands because it has accessible wifi and space to sit down with your laptop and get some work done.\n\nIf you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.`;
      });
  }

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
    sidebar: ''
  };

  private formIsValid(): boolean {
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  public onReviewSubmit(): void {
    this.formError = '';
    this.newReview.author = this.getUsername();
    if (this.formIsValid()) {
      this.locationService.addReviewByLocationId(this.location.id, this.newReview)
        .then((review: LocationReview) => {
          let reviews = this.location.reviews.slice(0);
          reviews.unshift(review);
          this.location.reviews = reviews;
          this.resetAndHideReviewForm();
        });
    } else {
      this.formError = 'All fields requried, please try again';
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getUsername(): string {
    const { name } = this.authenticationService.getCurrentUser();
    return name ? name : 'Guest';
  }

}
