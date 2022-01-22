export interface Route {
  linkText:string;
  path:string;
  icon?:string;
  subRoutes?:Route[]
}
