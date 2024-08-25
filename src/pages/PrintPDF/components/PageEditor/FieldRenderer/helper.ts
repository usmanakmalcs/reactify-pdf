import { DYNAMIC_QUESTION_TYPE } from "../constant";

export const SIGNATURE_MIN_WIDTH = 88;
export const SIGNATURE_MIN_HEIGHT = 20;

export const INITIALS_MIN_WIDTH = 38;
export const INITIALS_MIN_HEIGHT = 15;

export const shouldHideType = (fieldType, width) => {
  const { Initials, DateSigned, Date, TextBox, FullName, Address, Phone, Number, Currency } =
    DYNAMIC_QUESTION_TYPE;

  if (fieldType === Initials && width < 75) return true;
  else if ((fieldType === DateSigned || fieldType === Date) && width < 126) return true;
  else if (fieldType === TextBox && width < 84) return true;
  else if (fieldType === FullName && width < 102) return true;
  else if (fieldType === Phone && width < 133) return true;
  else if (fieldType === Address && width < 85) return true;
  else if (fieldType === Number && width < 85) return true;
  else if (fieldType === Currency && width < 93) return true;
};

