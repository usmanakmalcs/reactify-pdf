/* eslint-disable @typescript-eslint/no-explicit-any */

import { DYNAMIC_QUESTION_TYPE } from "./constant";

export const getDefaultFieldSize = (type: string) => {
  let width, height;

  if (
    type === DYNAMIC_QUESTION_TYPE.Signature ||
    type === DYNAMIC_QUESTION_TYPE.FullName
  ) {
    width = 88;
    height = 20;
  } else if (type === DYNAMIC_QUESTION_TYPE.Initials) {
    width = 50;
    height = 20;
  } else if (type === DYNAMIC_QUESTION_TYPE.DateSigned) {
    width = 106.67;
    height = 24;
  } else if (type === DYNAMIC_QUESTION_TYPE.CheckBox) {
    width = 21;
    height = 21;
  } else if (type === DYNAMIC_QUESTION_TYPE.Date) {
    width = 106.67;
    height = 24;
  } else if (type === DYNAMIC_QUESTION_TYPE.Address) {
    width = 160;
    height = 24;
  } else if (type === DYNAMIC_QUESTION_TYPE.StrikeThrough) {
    width = 160;
    height = 0;
  } else {
    width = 106.67;
    height = 24;
  }

  return {
    width,
    height,
  };
};

export const saveField = (newField, pageNumber) => {
  let fields: any = localStorage.getItem("fields");

  if (fields) {
    fields = JSON.parse(fields);
    if (fields[pageNumber]) {
      fields[pageNumber].push(newField);
    } else {
      fields[pageNumber] = [newField];
    }

    localStorage.setItem("fields", JSON.stringify(fields));
  }
};

export const setField = (fields) => {
  localStorage.setItem("fields", JSON.stringify(fields));
};

export const getFields = (pageNumber: number) => {
  const fields: any = localStorage.getItem("fields");

  if (fields && fields[pageNumber]) {
    return JSON.parse(fields);
  }

  return [];
};

export const updateField = (fieldProps, index, pageNumber) => {
  const fields: any = localStorage.getItem("fields");
  if (fields) {
    fields[pageNumber][index] = [
      ...fields[pageNumber][index],
      ...fieldProps ,
    ];
    setField(fields);
  }
};
