export interface Name {
  first?: string;
  last?: string;
  title?: string;
}
export interface Dob {
  age?: string;
  date?: string;
}

export interface Street {
  number?: number;
  name?: string;
}

export interface Coordinates
{
  latitude?: string;
  longitude?: string;
}
export interface Timezone
{
  description?: string;
  offset?: string;
}
export interface Location {
  street?:Street;
  city?: string;
  country?: string;
  state?:string;
  postcode?:string;
  coordinates?:Coordinates;
  timezone?:Timezone;
}
export interface Picture
{
  large?: string;
  medium?: string;
  thumbnail?:string;
}
export interface Registered
{
  date?: Date;
  age?: string;
}
export interface Customer {
  id?: number;
  name?: Name;
  gender?: string;
  location?: Location;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registered?: Registered;
  email?: string;
  picture?: Picture;
  phone?: string;
  // balance?: number;
}
