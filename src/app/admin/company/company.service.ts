import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Company } from '../user/users-table/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl = GlobalConstants.apiURL;
  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseUrl + 'companies');
  }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.baseUrl + 'companies/' + id);
  }

  postCompany(company: Company): Observable<Company> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Company>(this.baseUrl + 'companies', company, {
      headers: headers,
    });
  }

  putCompany(id: number, company: Company): Observable<Company> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Company>(this.baseUrl + 'companies/' + id, company, {
      headers: headers,
    });
  }

  deleteCompany(id: number): Observable<Company> {
    return this.httpClient.delete<Company>(this.baseUrl + 'companies/' + id);
  }
}