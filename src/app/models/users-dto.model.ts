export interface UsersDTO {
  info: Info;
  results: UserDTO[];
}

export interface Info {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface UserDTO {
  cell: string;
  dob: string;
  email: string;
  gender: string;
  id: UserId;
  location: UserLocation;
  login: UserLogin;
  name: UserName;
  nat: string;
  phone: string;
  picture: UserPicture;
  registered: string;
}

export interface UserId {
  name: string;
  value: string;
}

export interface UserLocation {
  city: string;
  postcode: number;
  state: string;
  street: string;
}

export interface UserLogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  username: string;
}

export interface UserName {
  first: string;
  last: string;
  title: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
