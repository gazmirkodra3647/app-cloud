/**
 * Filename: sophisticated_code_example.js
 * Description: This code demonstrates a sophisticated and complex JavaScript application that implements a social media feed.
 */

// Class for representing a user profile
class UserProfile {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.followers = [];
  }

  post(content) {
    // Send the post to server and update user's feed
    console.log(`[${this.username}] New post: ${content}`);
    this.updateFeed(content);
  }

  updateFeed(content) {
    // Update user's feed with the new post
    console.log(`[${this.username}] Updating feed...`);
    // Fetch feed from server, add new post and store in user's feed object
    this.feed = this.feed ? [content, ...this.feed] : [content];
    console.log(`[${this.username}] Feed updated!`);
  }

  follow(user) {
    // Follow another user
    if (!this.following(user)) {
      this.followers.push(user);
      user.addFollower(this);
    }
  }

  unfollow(user) {
    // Unfollow another user
    if (this.following(user)) {
      this.followers = this.followers.filter(follower => follower !== user);
      user.removeFollower(this);
    }
  }

  following(user) {
    // Check if this user is already following another user
    return this.followers.includes(user);
  }

  addFollower(user) {
    // Add a follower for this user
    if (!this.following(user)) {
      this.followers.push(user);
    }
  }

  removeFollower(user) {
    // Remove a follower from this user
    this.followers = this.followers.filter(follower => follower !== user);
  }

  getFeed() {
    // Retrieve the user's feed
    return this.feed || [];
  }
}

// Class for representing a social media feed
class SocialMediaFeed {
  constructor() {
    this.users = [];
    this.posts = [];
  }

  addUser(user) {
    // Add a user to the social media feed
    if (!this.hasUser(user)) {
      this.users.push(user);
    }
  }

  removeUser(user) {
    // Remove a user from the social media feed
    this.users = this.users.filter(u => u !== user);
  }

  hasUser(user) {
    // Check if the social media feed already has the user
    return this.users.includes(user);
  }

  makePost(user, content) {
    // Make a new post on the social media feed
    if (this.hasUser(user)) {
      this.posts.push({
        user: user,
        content: content,
        timestamp: new Date()
      });
      user.post(content);
    }
  }

  getPosts() {
    // Retrieve all the posts in the social media feed
    return this.posts;
  }

  getPostsByUser(user) {
    // Retrieve all posts in the social media feed by a specific user
    return this.posts.filter(post => post.user === user);
  }
}

// Create user profiles
const user1 = new UserProfile("JohnDoe", "john.doe@example.com");
const user2 = new UserProfile("JaneSmith", "jane.smith@example.com");
const user3 = new UserProfile("AliceJohnson", "alice.johnson@example.com");

// Create a social media feed
const feed = new SocialMediaFeed();

// Add users to the social media feed
feed.addUser(user1);
feed.addUser(user2);
feed.addUser(user3);

// Make some posts on the social media feed
feed.makePost(user1, "Hello World!");
feed.makePost(user2, "I love coding!");
feed.makePost(user1, "Check out this awesome project!");

// Follow/unfollow users
user2.follow(user1);
user3.follow(user1);

// Make more posts after following users
feed.makePost(user2, "Just had a great coding session!");
feed.makePost(user3, "Excited to join this community!");

// Get all posts in the social media feed
const allPosts = feed.getPosts();
console.log("All Posts:");
console.log(allPosts);

// Get posts by a specific user
const user1Posts = feed.getPostsByUser(user1);
console.log(`\nPosts by ${user1.username}:`);
console.log(user1Posts);