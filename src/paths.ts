const paths = {
  home() {
    return "/";
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  topicCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
