export default function formatId(string) {
  string = string.replace("https://www.flickr.com/photos/", "");
  return string;
}
