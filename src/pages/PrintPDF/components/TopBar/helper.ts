import { ICON_VARIANT_TYPE } from "../Icons";
import { DYNAMIC_QUESTION_TYPE } from "../PageEditor/constant";

export const QuestionConfig = [
  {
    name: "Signature",
    type: DYNAMIC_QUESTION_TYPE.Signature,
    icon: ICON_VARIANT_TYPE.Signature,
  },
  {
    name: "Initials",
    type: DYNAMIC_QUESTION_TYPE.Initials,
    icon: ICON_VARIANT_TYPE.Initials,
  },
  {
    name: "Date Signed",
    type: DYNAMIC_QUESTION_TYPE.DateSigned,
    icon: ICON_VARIANT_TYPE.DateSigned,
  },

  {
    name: "Full Name",
    type: DYNAMIC_QUESTION_TYPE.FullName,
    icon: ICON_VARIANT_TYPE.FullName,
  },
  {
    name: "Text",
    type: DYNAMIC_QUESTION_TYPE.TextBox,
    icon: ICON_VARIANT_TYPE.TextBox,
  },
  {
    name: "Check Box",
    type: DYNAMIC_QUESTION_TYPE.CheckBox,
    icon: ICON_VARIANT_TYPE.CheckBox,
  },
  {
    name: "Date",
    type: DYNAMIC_QUESTION_TYPE.Date,
    icon: ICON_VARIANT_TYPE.Date,
  },
  {
    name: "Address",
    type: DYNAMIC_QUESTION_TYPE.Address,
    icon: ICON_VARIANT_TYPE.Address,
  },
  {
    name: "Phone #",
    type: DYNAMIC_QUESTION_TYPE.Phone,
    icon: ICON_VARIANT_TYPE.PhoneNumber,
  },
];

export const MoreQuestionConfigs = [
  {
    name: "Number",
    type: DYNAMIC_QUESTION_TYPE.Number,
    icon: ICON_VARIANT_TYPE.Number,
  },
  {
    name: "Currency",
    type: DYNAMIC_QUESTION_TYPE.Currency,
    icon: ICON_VARIANT_TYPE.Currency,
  },
];

export const StrikeThroughQuestionConfigs = [
  {
    name: "Strikethrough",
    type: DYNAMIC_QUESTION_TYPE.StrikeThrough,
    icon: ICON_VARIANT_TYPE.StrikeThrough,
  },
];

