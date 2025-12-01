export default class PostCollection {
  /**
   * posts: initial array (optional). storageKey: the key to use in localStorage.
   * If there is saved data in localStorage it will be loaded instead of `posts`.
   */
  constructor(posts = [], storageKey = "posts") {
    this.storageKey = storageKey;
    // Try loading from localStorage. If none, use provided posts array.
    try {
      const saved = localStorage.getItem(this.storageKey);
      this.posts = saved ? JSON.parse(saved) : posts;
    } catch (err) {
      // If localStorage isn't available or JSON fails, fall back to provided posts
      console.warn("Could not read from localStorage", err);
      this.posts = posts;
    }
  }

  // Persist current posts array to localStorage
  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.posts));
    } catch (err) {
      console.warn("Could not save posts to localStorage", err);
    }
  }

  deletePost(id) {
    this.posts = this.posts.filter((post) => post.id !== Number(id));
    this.saveToStorage();
    console.log(this.posts);
  }

  getAllPosts() {
    return this.posts;
  }

  getPostById(id) {
    return this.posts.filter((post) => post.id == id)[0];
  }

  updatePost(updatedPost) {
    let postIndex;
    postIndex = this.posts.findIndex((post) => post.id == updatedPost.id);
    if (postIndex < 0) {
      console.warn(
        `Cannot update post with index ${updatedPost.id} because it doesn't exist`
      );
      return false;
    } else {
      this.posts[postIndex] = updatedPost;
      this.saveToStorage();
      console.log(`Post with id ${updatedPost.id} updated successfully`);
    }
  }

  addNewPost(newPost) {
    const foundId = this.posts.filter((post) => post.id == newPost.id);
    console.log(foundId);
    if (foundId.length) {
      console.log("This ID is already in use");
      return 0;
    } else {
      this.posts.push(newPost);
      this.saveToStorage();
      return newPost.id;
    }
  }

  // Remove all stored posts (from memory and localStorage)
  clearAll() {
    this.posts = [];
    try {
      localStorage.removeItem(this.storageKey);
    } catch (err) {
      console.warn("Could not clear localStorage", err);
    }
  }
}