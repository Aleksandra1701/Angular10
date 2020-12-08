import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';




 interface AuthResponseData {
     email: string,
    idToken: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,


}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}


  signup(email: string, password: string) {
    return this.http
       .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6Kh96u2Oycg2UxUWM2fgI26pw8EUp3CQ', 
       {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(catchError(errorRes => {
        let errorMessage='An unknown error occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
            
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists alredy';
        }
        return throwError(errorMessage);
    })
    );
  }
}