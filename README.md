# Mini Vue Projects

This web application has a subset of small web applications that were created just to solidfy and test my vue.js skills. 

## Initial Github process

### Step 1
First thing first, fork the repo to your github account. 

### Step 2
Now, you'll want to clone the repo to your local machine.

```html
git clone REPO_URL
```

### Step 3
You'll want to create a branch and work on this branch when making any changes.

```html
git branch [name of branch]
git checkout [name of branch]
```
You're now on your created branch and ready to work.

### Step 4
Once you've cloned the repo locally and created your branch, you'll want to install node modules both globally in the root as well as in the server folder.

While in the root folder:
```html
npm i
```

now, navigate to the server folder and install the node modules there.

```html
cd server/
npm i
```

Your all set!

## Daily Github process after the repo is on your local machine

### Step 1
Every day before you begin you'll need to pull the current master branch in case there were any changes made by others to the master.

Make sure you navigate to the master first (if you're not there already)

```html
git checkout master

```
Now make the pull request.

```html
git pull origin master
```

Navigate back to your branch and merge the master branch to your created branch. *If you have created a branch, refer to the Initial Github process steps above.*

```html 
git checkout [name of branch]
git merge master
```

### Step 2 
Once you've cloned the repo locally and created your branch, you'll want to install node modules both globally in the root as well as in the server folder.

While in the root folder:
```html
npm i
```

now, navigate to the server folder and install the node modules there.

```html
cd server/
npm i
```

Your all set!

### Step 3
You can go about working on the project like normal and when you're done and ready to push your changes, here are the commands to follow. Again, make sure you're making any changes to your created branch and not the master branch. 

```html
git add .
git commit -m "comment"
git push origin [name of branch]
```
