interface SSGType {
    cfg: {
      globalAuthorCaption?: string;
      watermarkText?: string;
      watermarkFontSize?: number;
      watermarkOffsetX?: number;
      watermarkOffsetY?: number;
      watermarkOpacity?: number;
      theme?: "light" | "dark";
    };
    run: (params: { fs?: boolean; initImgName?: [string, number] }) => void;
  }
  
  declare const SSG: SSGType;
  export default SSG;
  