#!/bin/bash

# Check if Homebrew is installed
if ! command -v brew &>/dev/null; then
    echo "Homebrew is not installed. Installing now..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
    echo "Homebrew is already installed."
fi

# Update Homebrew
echo "Updating Homebrew..."
brew update

# Install NGINX
echo "Installing NGINX..."
brew install nginx

# Install Node.js 16
echo "Installing Node.js 16..."
brew install node@16

# Ensure the correct version of Node.js is used
echo "Setting Node.js 16 as the default version..."
brew link --overwrite node@16 --force

# Install MongoDB
echo "Installing MongoDB..."
brew tap mongodb/brew
brew install mongodb-community@5.0

# Start MongoDB
echo "Starting MongoDB..."
brew services start mongodb/brew/mongodb-community

# Print the versions after installation
echo "NGINX version: $(nginx -v 2>&1)"
echo "Node.js version: $(node -v)"
echo "Installation complete."
