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
export class ArticlePageComponent implements OnInit, OnChanges {

  state: String = '';
  articlePage: any;
  error: any;

  createTimestamp: string;
  artileName: string;

  dateFormatPipeFilter: any;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    this.articlePage = {};
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params): void => {
      this.createTimestamp = params['createTimestamp'] + '';
      this.artileName = params['name'];
    });

    this.articleService.get(this.createTimestamp, '5oiR55qEIOesrDIgXyAvICMgLiBhc2RmICMkJV4mKiooIUAjJCUlKSgqJmDkuKrmlofnq6A')
      .subscribe(response => {

        if (response.error) {
          this.error = response.message[0];
          return;
        }

        this.articlePage = response.data;

      });


  }

  ngOnChanges() {


  }


}
