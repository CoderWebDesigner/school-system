export interface Route {
  linkTextAr:string;
  linkTextEn:string;
  path:string;
  color:string;
  icon?:string;
  subRoutes?:Route[]
}
