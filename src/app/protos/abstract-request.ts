import {Injectable} from '@angular/core';

@Injectable()
export abstract class AbstractRequest {
  public toJsonString(): string {
    let json = JSON.stringify(this);
    Object.keys(this).filter(key => key[0] === '_').forEach(key => {
      json = json.replace(key, key.substring(1));
    });
    return json;
  }
}
