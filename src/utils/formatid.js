export default function formatId(string) {
  if (typeof string !== "string") return false;
  string = string.replace("https://www.flickr.com/photos/", "");
  return string;
}
