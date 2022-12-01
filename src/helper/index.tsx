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
