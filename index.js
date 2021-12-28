const gallery = new GalleryComponent([
  new GalleryComponentImage(
    new GalleryComponentImage.PathOfImage("JPEG", "/foo/images/Picture1.jpg"),
    new GalleryComponentImage.Options({
      imageDimensionWidth: { unit: "px", amount: 200 },
      imageDimensionHeight: { unit: "px", amount: 150 },
      customStyleStrings: ["border::yellow::1px"],
    })
  ),
  [
    new GalleryComponentImage.SubBorderCaptionElementWithText({
      content: { e: "paragraph", t: "The caption for this employee" },
    }),
  ],
  new GalleryComponentImage(
    new GalleryComponentImage.PathOfImage("JPEG", "/foo/images/Picture2.jpg"),
    new GalleryComponentImage.Options({
      imageDimensionWidth: { unit: "px", amount: 200 },
      imageDimensionHeight: { unit: "px", amount: 150 },
      customStyleStrings: ["border::yellow::1px"],
    })
  ),
  [
    new GalleryComponentImage.SubBorderCaptionElementWithText({
      content: { e: "paragraph", t: "The caption for this employee" },
    }),
  ],
]);
