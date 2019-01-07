## I. Create new repository

```bash
$ git init
```

Create file and directory structure

Add new file and commit:

```bash
$ git add -A
$ git commit -m "Init repository"
```


## Share repository

1. Share to github (public)

```bash
$ git remote add origin <url>
```

2. Share to gitlab

```bash
$ git remote add gitlab <url>
```

3. List remote name:

```bash
$ git remote -v
```

4. Push to remote:

```bash
$ git push <remote-name> <branch-name>
```

5. Pull new code:

```bash
$ git pull <remote-name> <branch-name>
```


## II. Clone a new repository
Working with the others


```bash
$ git clone <url>
```

Create new branch

```bash
$ git branch <branch-name>
# list all branch
$ git branch -a
```

Switch branch
```bash
$ git checkout <branch-name>
```

## III. Reset to particular commit

View commit log:

```bash
$ git log
$ git log --oneline
$ git log --oneline -20
```

Checkout to a history version
```bash
$ git reset --hard <commit-hash>
```
