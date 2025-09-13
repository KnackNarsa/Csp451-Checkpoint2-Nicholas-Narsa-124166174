# CSP451-2025-Checkpoint3
## Introduction to GitHub and Version Control
### By Nicholas Narsa2 did all the work

### Learning Objectives

By completing this checkpoint, you will be able to:

 * This is all wrong and needs to be changed
 * I hoped this occurs a conflict, it did not work beofre
 * woooooh
 * Write professional documentation using Markdown syntax

### Installation instructions (Debian/Ubuntu):


**Install and Intialize Git:**
```bash
sudo apt-get install git #install git
```
```bash
git --version # verify installation
```

Create and intialize git in directory:
```bash
mkdir "directory name"  # make new directory

cd "directory name"     # move into the directory

git init                # intialize git in the directory
```

**Identify yourself to Git:**

```bash
git config --global user.name "your-username"

git config --global user.email "your-email@example.ca"
```

**Stage files for Git:**

To stage a specific

```bash
git add filename
```

Or, to stage all changes in the current directory, use:

```bash
git add .
```

**Commit staged file(s) for Git:**

```bash
git commit -m "type: description"
```

**Connect to Github:**

```bash
git remote add origin https://github.com/username/repo.git
```

**Push existing commit to Github:**

```bash
git push origin main
```

### Usage Example:

1. Create a text file:

```bash
touch test.txt
```

2. Stage file to git

```bash
git add test.txt    
```

3. Commit the staged file with a description

```bash
git commit -m "docs: add test.txt"
```

4. Connect to Github repository:

```bash
git remote add origin https://github.com/KnackNarsa/CSP451-CheckPoint1-NicholasNarsa.git
```

5. Push all existing commits to Github:

```bash
git push -u origin main
```

### Contributing Guidelines

This repository is for a school assignment.
I will not be accepting contributions at this time.

### License Information

This repository is for a school assignment and is not licensed for public use.


# CSP451-Checkpoint 2


### Usage example

login.js

```js
login("alice", "password123");
login("bob", "wrongpassword");
resetPassword("bob", "newpassword");
login("bob", "newpassword");
logout("alice");
```

database.js

```js
connectDB();
insertUser({ username: "alice", password: "pass123" });
insertUser({ username: "bob", password: "qwerty" });
disconnectDB();
```
