1. sudo apt update && sudo apt upgrade

2. sudo apt install nginx, certbot, python3-certbot-nginx

3. sudo ufw allow "Nginx Full"

4. ufw allow OpenSSH
   sudo ufw allow 80/tcp

5. ufw enable
   sudo ufw reload

6. apt install npm

7. npm install -g yarn

8. yarn global add pm2

9. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

10. exec $SHELL

11. nvm install --lts

generating-ssh-key-gihub.md

12. git clone next app at
    /var/www/

13. cd /'next-app'
    yarn install
    yarn build
    cd ..

14. cd /etc/nginx/
    cd sites-available/
    touch 'site-name'

    ['site-name' = nginx-site-name.config]

15. cd ..
    nano nginx.config

    [change sites-enabled to sites-available there]

16. systemctl restart nginx
    nginx -t

17. cd sites-available
    rm default

18. cd ../sites/enabled
    rm default

19. systemctl restart nginx
    nginx -t

20. cd /var/www/'next-app'
    pm2 start yarn --name 'next-app' -- start

`FOR HOSTING ANOTHER BRANCH ON ANOTHER DIRECTORY`

1. cd /var/www/
   git clone -b demo <repository_url>

2. cd /var/www/demo
   yarn install
   yarn build

3. cd /etc/nginx/sites-available/
   touch demo-website

   nano demo-website
   {paste the nginx configuration code with the correct port using by the app}

4. cd /etc/nginx/sites-enabled/
   ln -s /etc/nginx/sites-available/demo-website .

   {optional - if you have already made every sites-availabled as sites-enbaled}

5. systemctl restart nginx
   nginx -t

6. ufw allow <demo_app_port>/tcp

7. cd /var/www/demo
   pm2 start yarn --name demo-app -- start
