import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA, TAB} from '@angular/cdk/keycodes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as $ from 'jquery';

import { DateFormatPipe } from '../../_pipelines/_index';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../_services/_index';

@Component({
  selector: 'app-artile-page',
  // template: `<h1>Bills List </h1>`,
  templateUrl: './article_page.component.html',
  styleUrls: ['./article_page.component.css']
})
export class ArticlePageComponent implements OnInit {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA, TAB];

  _articleTags = [];


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

  articleChannels = new FormControl();
  articleChannelsList = ['帮助中心', '新闻资讯', '优惠活动', '发现底部'];
  articleChannelSelected: any;


  articleTypes = new FormControl();
  articleTypesList = ['账户问题', '出入金问题', '交易问题'];
  articleTypesSelected: any;

  dateFormatPipeFilter: any;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
    this.articlePage = {};
    this.checked = true;

    this.articleChannelSelected =  [];
    this.articleTypesSelected = [];
  }

  ngOnInit() {

    this._timestamp = new Date().getTime();

    this.isArticlePreview = this.activatedRoute.snapshot.queryParams.action === 'preview';

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

        if (this.articlePage.channel) {
          this.articleChannelSelected = this.articlePage.channel.split(',');
        }

        if (this.articlePage.type) {
          this.articleTypesSelected = this.articlePage.type.split(',');
        }

        if (this.articlePage.tags) {
          this._articleTags = this.articlePage.tags.split(',').map(tag => {
            return { name: tag.trim() };
          });
        }

        // _articleTags = [
        //   { name: 'Lemon' },
        //   { name: 'Lime' },
        //   { name: 'Apple' },
        // ];


      });

  }

  onSubmit(formData) {

    if (!formData.valid) {
      return;
    }

    if (this.articleChannelSelected.length > 0) {
      this.articlePage.channel = this.articleChannelSelected.join(',');
    }

    if (this.articleTypesSelected.length > 0) {
      this.articlePage.type = this.articleTypesSelected.join(',');
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


  remove(fruit: any): void {

    const index = this._articleTags.indexOf(fruit);

    if (index >= 0) {
      this._articleTags.splice(index, 1);
      this.articlePage.tags = this._articleTags.map(tag => tag.name).join(', ');
    }
  }

  add(event: MatChipInputEvent): void {

    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {

      const isexists = this._articleTags.filter(a => a.name.trim() === value.trim());

      if (isexists.length === 0) {
        this._articleTags.push({ name: value.trim() });
        this.articlePage.tags = this._articleTags.map(tag => tag.name).join(', ');
      }

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

}
