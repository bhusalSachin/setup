1. ssh-keygen -t ed25519 -C "your_email@example.com"

2. eval "$(ssh-agent -s)"

3. ssh-add ~/.ssh/id_ed25519

4. cat ~/.ssh/id_ed25519.pub

# Then select and copy the contents of the id_ed25519.pub file

# displayed in the terminal to your clipboard
