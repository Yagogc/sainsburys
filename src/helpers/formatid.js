export default function formatId(string) {
  string = string.replace("https://www.flickr.com/photos/", "");
  // console.log(string);
  return string;
}
