/* eslint-disable @typescript-eslint/no-explicit-any */

import { DYNAMIC_QUESTION_TYPE } from "./constant";

export const getDefaultFieldSize = (type: string) => {
  let width, height;

  if (type === DYNAMIC_QUESTION_TYPE.Date) {
    width = 150.67;
    height = 30;
  } else if (type === DYNAMIC_QUESTION_TYPE.Address) {
    width = 200;
    height = 24;
  } else {
    width = 150.67;
    height = 35;
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
  } else {
    fields = { [pageNumber]: [newField] };
  }

  localStorage.setItem("fields", JSON.stringify(fields));
};

export const setField = (fields) => {
  localStorage.setItem("fields", JSON.stringify(fields));
};

export const getFields = (pageNumber: number) => {
  const fields: any = localStorage.getItem("fields");

  if (fields) {
    return JSON.parse(fields)[pageNumber] || [];
  }

  return [];
};

export const updateField = (fieldProps, index, pageNumber) => {
  const fields: any = localStorage.getItem("fields");
  if (fields) {
    const parsedFields = JSON.parse(fields);

    parsedFields[pageNumber][index] = {
      ...parsedFields[pageNumber][index],
      ...fieldProps,
    };
    setField(parsedFields);
  }
};

export const saveFieldValue = (value, index, pageNumber) => {
  let fields: any = localStorage.getItem("fields");
  if (fields) {
    fields = JSON.parse(fields);
    fields[pageNumber][index].value = value;
    setField(fields);
  }
};
