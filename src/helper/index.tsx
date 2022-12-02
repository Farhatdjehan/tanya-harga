export function slugify(content: any) {
  return content
    ?.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function unslugify(slug: string) {
  const result = slug?.replace(/\-/g, " ");
  return result?.replace(/\w\S*/g, function (txt: string) {
    return txt;
  });
}

export function shuffle(array: any) {
  let currentIndex = array?.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

/** READ COOKIE */
export function getCookie(cname: any) {
  if (typeof document === "undefined") return;
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/** CREATE COOKIE */
export function setCookie(cname: any, cvalue: any, exdays: any) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/** DELETE COOKIE */
export function deleteCookie(cname: any) {
  if (typeof document === "undefined") return;
  let expires = "expires=" + "01 Jan 1970 00:00:00";
  document.cookie = cname + "=" + "" + ";" + expires + ";path=/";
}
