export type Contentful = {
  getEntries: (queryObject: {
    content_type?: string;
    order?: string;
    limit?: string;
    skip?: string;
  }) => Promise<unknown>;
};
