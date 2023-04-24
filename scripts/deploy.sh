#! /bin/bash

git push && 
git co gh-pages && 
git merge --no-ff origin/master --no-edit && 
git push && 
git co master