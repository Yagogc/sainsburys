import formatId from "./formatid";

describe("Format ID:", () => {
  test("Get ID from link:", () => {
    const link = "https://www.flickr.com/photos/71092681@N07/39310823940/";
    const expected = "71092681@N07/39310823940/";
    expect(formatId(link)).toBe(expected);
  });
  test("Return false if param passed is not a string:", () => {
    const link = 123123;
    expect(formatId(link)).toBe(false);
  });
});
