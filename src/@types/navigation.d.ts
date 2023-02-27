export interface MenuParams {
  id: number,
  name: string,
  description: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      menu: MenuParams
    }
  }
}
