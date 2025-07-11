interface User {
  name: string;
  password: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  loggedIn: boolean;
}

export interface CartState {
  cartId: number[];
}
