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
  let currentIndex = array.length,
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
