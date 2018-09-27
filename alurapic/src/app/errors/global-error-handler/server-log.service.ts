import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ServerLog } from './server-log';

const SERVERLOGURL = environment.serverLogUrl;

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(
    private httpCliente: HttpClient
  ) { }

  log(serverLog: ServerLog) {

    return this.httpCliente.post(SERVERLOGURL + '/infra/log', serverLog);
  }
}
