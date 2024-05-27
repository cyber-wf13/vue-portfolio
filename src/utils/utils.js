export const stringToCapitilize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getJsonData = async function (link, router) {
  try {
    let res = await fetch(link);
    return await res.json();
  } catch (error) {
    router.push("/error");
  }
};
