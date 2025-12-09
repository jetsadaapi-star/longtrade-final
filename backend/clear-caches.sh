#!/bin/bash

# LongTrade Platform - Clear All Caches and Restart Server

echo "🧹 Clearing all caches..."

# Clear Laravel caches
/Applications/MAMP/bin/php/php8.2.26/bin/php artisan optimize:clear
/Applications/MAMP/bin/php/php8.2.26/bin/php artisan config:clear
/Applications/MAMP/bin/php/php8.2.26/bin/php artisan cache:clear
/Applications/MAMP/bin/php/php8.2.26/bin/php artisan view:clear
/Applications/MAMP/bin/php/php8.2.26/bin/php artisan route:clear

# Clear Filament caches
/Applications/MAMP/bin/php/php8.2.26/bin/php artisan filament:optimize-clear 2>/dev/null || echo "Filament optimize-clear not available"
/Applications/MAMP/bin/php/php8.2.26/bin/php artisan filament:cache-components 2>/dev/null || echo "Filament cache-components not available"

echo "✅ All caches cleared!"
echo ""
echo "🔄 Please restart the server manually:"
echo "1. Stop the current server (Ctrl+C)"
echo "2. Run: /Applications/MAMP/bin/php/php8.2.26/bin/php artisan serve"
echo "3. Refresh browser with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)"
