#!/bin/bash
# Office HR System - Deploy Script
# Run this to deploy Horilla HRMS to your cloud

echo "=================================="
echo "  Office HR System - Deploy"
echo "=================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${RED}Error: .env file not found${NC}"
    echo "Copy .env.example to .env and fill in your values"
    exit 1
fi

# Load environment variables
source .env

echo -e "${GREEN}[1/5]${NC} Building Docker image..."
docker-compose build

echo -e "${GREEN}[2/5]${NC} Starting services..."
docker-compose up -d

echo -e "${GREEN}[3/5]${NC} Waiting for database..."
sleep 10

echo -e "${GREEN}[4/5]${NC} Running migrations..."
docker-compose exec horilla python manage.py migrate

echo -e "${GREEN}[5/5]${NC} Collecting static files..."
docker-compose exec horilla python manage.py collectstatic --noinput

echo ""
echo "=================================="
echo -e "${GREEN}Deploy Complete!${NC}"
echo "=================================="
echo ""
echo "Access at: http://localhost:8000"
echo "Admin: http://localhost:8000/admin"
echo ""
echo "Next steps:"
echo "1. Create admin user:"
echo "   docker-compose exec horilla python manage.py createhorillauser"
echo ""
echo "2. Configure in admin panel:"
echo "   - Company settings"
echo "   - Attendance rules"
echo "   - Working hours"
echo ""