import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoxScore } from 'src/app/shared/models/box-score';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BoxScoreService {

  private _boxScoreBehaviorSubject: BehaviorSubject<BoxScore>;
  private _boxScoreObservable: Observable<BoxScore>;
  constructor(private _httpClient: HttpClient,
  ) {

    this._boxScoreBehaviorSubject = new BehaviorSubject<BoxScore>(undefined);
    this._boxScoreObservable = this._boxScoreBehaviorSubject.asObservable();

  }

  public findBoxForGame(gameId: string): void {

    const url = `${environment.server}:3000/box?gameID=${gameId}`;

    this._httpClient.get(url).subscribe(results => {
      this._setBoxScoreValue(results as BoxScore);
    })


  }

  private _setBoxScoreValue(boxScore: BoxScore) {
    this._boxScoreBehaviorSubject.next(boxScore);
  }
  public get boxScoreObservable(): Observable<BoxScore> {
    return this._boxScoreObservable;
  }
}
