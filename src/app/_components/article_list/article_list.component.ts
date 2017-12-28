import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ArticleService } from '../../_services/_index';

@Component({
  selector: 'app-article-list',
  templateUrl: './article_list.component.html',
  styleUrls: ['./article_list.component.css']
})
export class ArticleListComponent implements OnInit {

  _user: any;
  _articleCount: number;
  _pageSize: number;
  _pageIndex: number;
  _skip: number;
  _articleList: any;
  _notHaveMoreList: boolean;
  _hidArticleListSize: string;

  constructor(private articleService: ArticleService) {

    this._user = null;
    this._skip = $('#hidArticleListSize').length > 0 ? parseInt($('#hidArticleListSize').val(), 0) : 0;
    this._pageSize = this._skip; // $('#hidArticlePageSize').length > 0 ? parseInt($('#hidArticlePageSize').val(), 0) : 5;

    // this._skip = 1;
    this._articleList = [];
    this._notHaveMoreList = false;
  }

  ngOnInit() {
    // this.loadMore();
  }

  loadMore() {

    this.articleService.list(this._skip)
      .subscribe(response => {

        if (!this._user && response.data) {
          this._user = response.user;
        }

        if (response.data.length === 0) {
          this._notHaveMoreList = true;
          return;
        }

        console.log(this._articleList, 'this._articleList');
        this._articleList = this._articleList.concat(response.data);

        this._skip = this._skip + this._pageSize;

      });
  }

}
