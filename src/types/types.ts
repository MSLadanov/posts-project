export type TPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  image?: string;
  rated?: boolean;
  rate?: null | string;
  postImage?: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
  comments: TComment[];
  user: {
    firstName: string;
    lastName: string;
    image: string;
  };
};

type Hair = {
  color: string;
  type: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Address = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
};

type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type CompanyAddress = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
};

type Company = {
  department: string;
  name: string;
  title: string;
  address: CompanyAddress;
};

type Crypto = {
  coin: string;
  wallet: string;
  network: string;
};

export interface TUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

export type TComment = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  liked?: boolean;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
};

export type TPostsList = TPost[] | [];

export type TCommentsList = TComment[];

export type TPostsListsRequest = {};

export interface TPostsListState {
  postsList: {
    data: TPostsList | [];
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
  post: {
    data: TPost | null;
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
  postsTags: {
    data: TTag[] | null;
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
  tag: string[] | [];
  comments: {
    data: TComment[] | [];
    loading: "idle" | "pending" | "succeeded" | "failed";
  };
}

export interface TPostAppStore {
  posts: TPostsListState;
  user: TUserStore;
}

export interface TUserStore {
  data: TUser;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface TFallbackRenderProps {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
}

export type TTag = {
  slug: string;
  name: string;
  url: string;
};

export type TLoggedUserCredentials = {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
};

export type TRegisteredUserCredentials = Partial<TUser>;

export type TNotifyType = 'warning' | 'error' | 'success'