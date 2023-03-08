import {ImageSourcePropType} from "react-native";

export interface MenuParams {
  id: number;
  name: string;
  description: string;
  star_hours: string;
  finish_hours: string;
  url_logo: ImageSourcePropType;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      menu: MenuParams
    }
  }
}
