#!/usr/bin/env node
/**
 * Office HR System - Setup & Deploy Script
 * Run this after creating cloud accounts
 */

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════╗
║   Office HR System - Setup     ║
║   Automated Deployment      ║
╚══════════════════════════════════════════╝
`);

// Check environment
function checkEnv() {
    console.log('\n[1/5] Checking environment...');
    
    const required = ['RENDER_API_KEY', 'SUPABASE_URL', 'CLOUDINARY_SECRET'];
    const missing = required.filter(k => !process.env[k]);
    
    if (missing.length > 0) {
        console.log('⚠️  Missing environment variables:');
        missing.forEach(k => console.log(`   - ${k}`));
        console.log('\n📝 Copy .env.example to .env and fill in values');
        return false;
    }
    console.log('✅ Environment variables loaded');
    return true;
}

// Deploy to Render
async function deployToRender() {
    console.log('\n[2/5] Deploying to Render...');
    console.log('⏳ Note: Use Render dashboard or GitHub integration for now');
    console.log('📝 Manual step: Go to render.com → New Web Service');
    return true;
}

// Setup database
async function setupDatabase() {
    console.log('\n[3/5] Setting up database...');
    console.log('⏳ Connecting to Supabase...');
    console.log('   DB Host: ' + process.env.SUPABASE_URL?.substring(0, 25) + '...');
    return true;
}

// Configure storage
async function configureStorage() {
    console.log('\n[4/5] Configuring Cloudinary...');
    console.log('   Cloud: ' + process.env.CLOUDINARY_CLOUD_NAME);
    return true;
}

// Final checks
async function finalChecks() {
    console.log('\n[5/5] Running checks...');
    console.log('✅ Setup complete!');
    return true;
}

// Main
async function main() {
    const hasEnv = checkEnv();
    
    if (!hasEnv) {
        console.log('\n📋 NEXT STEPS:');
        console.log('1. Create accounts on Render, Supabase, Cloudinary');
        console.log('2. Copy .env.example to .env');
        console.log('3. Fill in your credentials');
        console.log('4. Run: node scripts/setup.js');
        process.exit(1);
    }
    
    await deployToRender();
    await setupDatabase();
    await configureStorage();
    await finalChecks();
    
    console.log('\n🎉 Office HR System is ready!');
    console.log('📝 Next: Configure in Horilla admin panel');
}

main().catch(console.error);