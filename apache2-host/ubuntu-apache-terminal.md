1. sudo apt update
   sudo apt install apache2

2. sudo apt install php libapache2-mod-php

3. sudo a2dissite 000-default.conf

4. sudo nano /etc/apache2/sites-available/sachin.com.conf

5. sudo a2ensite sachin.com.conf

6. sudo systemctl reload apache2

7. sudo ufw enable
   sudo ufw allow 80/tcp
   sudo ufw reload
   sudo systemctl restart apache2

8. sudo a2enmod rewrite
   sudo systemctl restart apache2
