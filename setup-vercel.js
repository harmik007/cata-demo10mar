#!/usr/bin/env node

const fs = require('fs');
const crypto = require('crypto');

console.log('🚀 Setting up BigCommerce Catalyst for Vercel deployment...\n');

// Generate required secrets
const authSecret = crypto.randomBytes(32).toString('hex');
const turboSignatureKey = crypto.randomBytes(32).toString('hex');

console.log('📋 Required Environment Variables for Vercel:');
console.log('==========================================\n');

console.log('1. BIGCOMMERCE_STORE_HASH');
console.log('   Get this from your BigCommerce admin URL: https://store-{hash}.mybigcommerce.com\n');

console.log('2. BIGCOMMERCE_STOREFRONT_TOKEN');
console.log('   Create in BigCommerce Admin → Advanced → API Accounts → Storefront API Token\n');

console.log('3. BIGCOMMERCE_CHANNEL_ID');
console.log('   Default: 1 (or create a new channel in BigCommerce)\n');

console.log('4. AUTH_SECRET');
console.log('   Generated value:', authSecret, '\n');

console.log('5. TURBO_REMOTE_CACHE_SIGNATURE_KEY');
console.log('   Generated value:', turboSignatureKey, '\n');

console.log('6. DEFAULT_REVALIDATE_TARGET');
console.log('   Recommended: 3600\n');

console.log('7. ENABLE_ADMIN_ROUTE');
console.log('   Production: false, Development: true\n');

console.log('📝 Next Steps:');
console.log('1. Go to your Vercel project dashboard');
console.log('2. Navigate to Settings → Environment Variables');
console.log('3. Add all the variables listed above');
console.log('4. Redeploy your project\n');

console.log('✅ Setup script completed!');
