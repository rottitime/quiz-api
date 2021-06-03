#!/bin/sh
echo "Starting build"
npm run build
echo "Restarting"
touch tmp/restart.txt