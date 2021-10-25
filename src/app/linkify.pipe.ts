// https://stackoverflow.com/questions/39276617/angular2-way-of-converting-plain-text-to-url-anchor-links

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  urls: any = /(\b(https?|http|ftp|ftps|Https|rtsp|Rtsp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;

  transform(text: string) {
    return this.parseUrl(text);
  }

  private parseUrl(text: string) {
    if (text.match(this.urls)) {
      text = text.replace(this.urls, function replacer($1, $2) {
        let url: any = $1;
        let urlClean: any = url.replace("" + $2 + "://", "");

        return "<a href=\"" + url + "\" target=\"_blank\">" + urlClean + "</a>";
      });
    }
    return text;
  }
}
