import type { ValidationError } from "@types";

export function isServer() {
  return typeof window === "undefined";
}
export function addFormServerErrors<T>(
  errors: ValidationError<T>[],
  setError: (
    fieldName: keyof T,
    error: { type: string; message: string }
  ) => void
) {
  return errors.forEach((error) => {
    error.members.map((m) => {
      setError(m, {
        type: "server",
        message: error.message,
      });
    });
  });
}
export function getDurationString(duration: number) {
  const hours = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  let dur = hours > 0 ? `${hours}` : "";
  dur = dur + (hours > 0 ? (hours > 1 ? " hours" : " hour") : "");
  dur = dur + (hours > 0 && mins > 0 ? " and " : "");
  dur = dur + (mins > 0 ? `${mins}` : "");
  dur = dur + (mins > 0 ? (mins > 1 ? " mins" : " min") : "");
  return dur;
}
export function clip(a: number, min: number, max: number) {
  return Math.min(Math.max(a, min), max);
}

export function dataURItoBlob(dataURI: string | null) {
  if (!dataURI) return null;
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(dataURI.split(",")[1]);
  else byteString = unescape(dataURI.split(",")[1]);

  // separate out the mime component
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}

export function outerWidth(el: HTMLElement, style?: CSSStyleDeclaration) {
  return (
    el.offsetWidth +
    (style
      ? parseInt(style.marginLeft) || 0 - parseInt(style.marginRight) || 0
      : 0)
  );
}
export function outerHeight(el: HTMLElement, style?: CSSStyleDeclaration) {
  return (
    el.offsetHeight +
    (style
      ? parseInt(style.marginTop) || 0 - parseInt(style.marginRight) || 0
      : 0)
  );
}
export function width(el: HTMLElement, style: CSSStyleDeclaration) {
  return (
    el.clientWidth - parseInt(style.borderLeftWidth) ||
    0 - parseInt(style.borderRightWidth) ||
    0
  );
}

export function height(el: HTMLElement, style: CSSStyleDeclaration) {
  return (
    el.clientHeight - parseInt(style.borderTopWidth) ||
    0 - parseInt(style.borderBottomWidth) ||
    0
  );
}

export function innerWidth(el: HTMLElement) {
  return el.clientWidth;
}

export function innerHeight(el: HTMLElement) {
  return el.clientHeight;
}
export function commafy(number: string, delimiterChar = ",") {
  if (!number) {
    return number;
  }
  const str = number.split(delimiterChar).join("").split(".");

  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1" + delimiterChar);
  }
  if (str[1] && str[1].length >= 4) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
}
