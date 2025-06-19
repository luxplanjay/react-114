export interface UserLoginValues {
  email: string;
  password: string;
}

export interface UserRegisterValues {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface RefreshResponse {
  name: string;
  email: string;
}
