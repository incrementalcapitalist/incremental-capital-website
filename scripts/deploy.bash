#!/bin/bash

###############################################################################
# File: deploy.bash
# Path: scripts/deploy.bash
###############################################################################
#
# Deployment script for Incremental Capital LLC website
#
# This script handles the build and deployment process for the Incremental
# Capital LLC website. It performs cleanup, dependency installation, production
# build creation, and local verification before deployment.
#
###############################################################################
#
# Copyright (c) 2024 Incremental Capital LLC. All rights reserved.
# 
# Author: Incremental Capital LLC
# Created: January 13, 2024
# Updated: January 13, 2024
# Version: 1.0.0
#
# License: Proprietary and confidential
# This software is the property of Incremental Capital LLC.
# Unauthorized copying, distribution, or use is strictly prohibited.
#
###############################################################################
#
# Usage: ./scripts/deploy.bash
#
# Requirements:
#   - Node.js 16.x or higher
#   - npm 7.x or higher
#   - Proper environment configuration
#
# Environment Variables Required:
#   None currently required
#
# Exit Codes:
#   0 - Success
#   1 - Build failure
#   2 - Dependency installation failure
#   3 - Preview failure
#
###############################################################################

# Enable strict error handling
set -euo pipefail
IFS=$'\n\t'

# Script variables
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
LOG_FILE="deploy-${TIMESTAMP// /_}.log"

# Logging function
log() {
    local message="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
    echo "$message"
    echo "$message" >> "$LOG_FILE"
}

# Error handling
handle_error() {
    local exit_code=$?
    local line_number=$1
    log "Error on line $line_number: Command exited with status $exit_code"
    exit "$exit_code"
}

trap 'handle_error $LINENO' ERR

# Start deployment process
log "Starting deployment process"
log "Node version: $(node --version)"
log "npm version: $(npm --version)"

# 1. Clean previous builds
log "Cleaning previous builds..."
if npm run clean; then
    log "Clean completed successfully"
else
    log "Clean failed"
    exit 1
fi

# 2. Fresh dependency installation
log "Removing node_modules..."
rm -rf node_modules
log "Installing dependencies..."
if npm install; then
    log "Dependencies installed successfully"
else
    log "Dependency installation failed"
    exit 2
fi

# 3. Build application
log "Building application..."
if npm run build; then
    log "Build completed successfully"
else
    log "Build failed"
    exit 1
fi

# 4. Test production build
log "Testing production build..."
if npm run preview; then
    log "Preview started successfully"
else
    log "Preview failed"
    exit 3
fi

log "Deployment process completed successfully"
exit 0

###############################################################################
# Changelog:
#
# v1.0.0 (2024-01-13)
# - Initial release
# - Added basic deployment functionality
# - Implemented error handling and logging
#
###############################################################################