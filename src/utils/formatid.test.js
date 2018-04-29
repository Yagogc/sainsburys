import formatId from "./formatid";

test("Get ID from link:", () => {
  const link = "https://www.flickr.com/photos/71092681@N07/39310823940/";
  const expected = "71092681@N07/39310823940/";
  expect(formatId(link)).toBe(expected);
});
