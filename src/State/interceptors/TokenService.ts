import {jwtDecode} from 'jwt-decode';

export class TokenService {
  setToken(token: string) {
    if (typeof window !== 'undefined') {  
      localStorage.setItem('jwt', token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('jwt');
    }
    return null;
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        this.clearToken(); 
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  clearToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwt');
    }
  }

  isTokenNotValid(): boolean {
    return !this.isTokenValid();
  }

  getUserRoles(): string[] {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.authorities || [];
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
    return [];
  }

  getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.fullName || null;
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
    return null;
  }
}