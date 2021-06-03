#!/bin/sh
echo "Updating"
git pull --rebase
npm i 
echo "Starting build"
npm run build
echo "Restarting"
touch tmp/restart.txt