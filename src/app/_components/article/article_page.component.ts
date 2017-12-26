import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

declare var jquery: any;
declare var $: any;

import { DateFormatPipe } from '../../_pipelines/_index';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../_services/_index';
import {ArticleEntity} from '../../_entities/article.entity';

@Component({
  selector: 'app-artile-page',
  // template: `<h1>Bills List </h1>`,
  templateUrl: './article_page.component.html',
  styleUrls: ['./article_page.component.css']
})
export class ArticlePageComponent implements OnInit {

  _timestamp: any;
  _user: any;

  state: String = '';
  articlePage: any;
  error: any;

  isArticlePreview: boolean;
  createDate: string;
  createTimestamp: string;
  articleName: string;
  checked: boolean;

  dateFormatPipeFilter: any;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
    this.articlePage = {};
    this.checked = true;
  }

  ngOnInit() {

    this._timestamp = new Date().getTime();

    this.isArticlePreview = this.activatedRoute.snapshot.queryParams.action == 'preview';

    this.activatedRoute.params.subscribe((params: Params): void => {
      this.createDate = params['createDate'];
      this.createTimestamp = params['createTimestamp'] + '';
      this.articleName = params['name'];

    });

    this.articleService.get(this.createDate, this.createTimestamp, this.articleName)
      .subscribe(response => {

        if (response.error) {
          this.error = response.message[0];
          return;
        }

        this.articlePage = response.data;
        this._user = response.user;

    });

  }

  onSubmit(formData) {

    if (!formData.valid) {
      return;
    }

    this.articleService.post(this.createDate, this.createTimestamp, this.articleName, this.articlePage)
      .subscribe(response => {

        if (response.error) {
          this.error = response.message[0];
          return;
        }

        window.location.href = response.data.url;

    });


  }


}
