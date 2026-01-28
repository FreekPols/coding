# GitHub

## Basics


### Push and pull
| Command | Description |
|---------|-------------|
| `git checkout main` | Switch to the main branch. |
| `git pull` | Fetch and merge changes from the remote repository to your local repository. |
| `git add <file_name>` | Stage changes for the next commit. |
| `git add .` | Stage ALL changes in the current directory for the next commit. |
| `git commit -m "commit message"` | Commit staged changes with a descriptive message. |
| `git push` | Upload local repository content to a remote repository on GitHub. |
| `git fetch origin` | Download objects and refs from another repository. |

### Cloning and branching
| Command | Description |
|---------|-------------|
| `git clone <repo_url>` | Clone a repository from GitHub to your local machine. |
| `git branch` | Lists branches in your repository. |
| `git checkout <branch_name>` | Switch to a different branch in your repository. |
| `git switch -C <branch_name>` | Create and switch to a new branch. |

### Solve conflicts
| Command | Description |
|---------|-------------|
| `git revert <commit_hash>` | Revert changes made in a specific commit by creating a new commit. |
| `git reset --hard <commit_hash>` | Reset your branch to a specific commit, discarding all changes after that commit. |
| `git reset --hard HEAD` | Reset your branch to the last commit, discarding all changes after that commit. |

### Synch with remote repo
| Command | Description |
|---------|-------------|
| `git fetch origin` | Download objects and refs from another repository. |
| `git reset --hard origin/main` | Reset your branch to match the remote main branch, discarding all local changes. |
| `git clean -fd` | Remove untracked files and directories from the working directory. |


### Replace to another branch
| Command | Description |
|---------|-------------|
| `git switch -c nieuwe_branch` | Create and switch to a new branch named "nieuwe_branch". |
| `git add .` | Stage all changes in the current directory for the next commit. |
| `git commit -m "Mijn edits"` | Commit staged changes with the message "Mijn edits". |

### Merging branches
| Command | Description |
|---------|-------------|
| `git merge <branch_name>` | Merge a specified branch into the current branch. |
| `git merge --squash <branch_name>` | Combine all changes from a specified branch into a single commit on the current branch. |

### Remove branch
| Command | Description |
|---------|-------------|
| `git branch -d <branch_name>` | Delete a local branch. |
| `git push origin --delete <branch_name>` | Delete a remote branch on GitHub