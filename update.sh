#!/bin/bash
cd ../production/portfolio/
echo 'Pulling latest changes'
git pull
echo 'Building latest changes'
bun run build
echo 'Removing old instance'
pm2 delete 'Portfolio'
echo 'Starting new instance'
pm2 start bun --name 'Portfolio' -- start
echo 'Done'
