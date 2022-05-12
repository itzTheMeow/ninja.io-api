// probably incomplete
interface CustomizationValue {
  id: string;
  texture: string;
  data: { energy?: string };
  cdata: {
    ax?: number;
    axn?: number;
    ay?: number;
    ayn?: number;
    custom?: string;
    h?: number;
    r?: number;
    s?: number;
    tint?: string;
    sprite?: boolean;
  };
}

export default interface Customization {
  hair: CustomizationValue;
  armleftlower: CustomizationValue;
  armrightlower: CustomizationValue;
  armleftupper: CustomizationValue;
  armrightupper: CustomizationValue;
  legleftupper: CustomizationValue;
  legrightupper: CustomizationValue;
  belt: CustomizationValue;
  torso: CustomizationValue;
  legrightlower: CustomizationValue;
  legleftlower: CustomizationValue;
  orb: CustomizationValue;
  extra: CustomizationValue;
  face: CustomizationValue;
}
