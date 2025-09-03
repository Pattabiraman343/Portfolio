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
  
  // Tell TypeScript that `SSG` exists globally (loaded via CDN)
  declare const SSG: SSGType;
  