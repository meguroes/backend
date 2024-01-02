export type Contentful = {
  getEntries: (_queryObject: {
    content_type?: string;
    order?: string[];
    limit?: string;
    skip?: string;
  }) => Promise<unknown>;
};
