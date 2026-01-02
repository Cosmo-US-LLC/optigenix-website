# Update Stripe Publishable Key in frontend .env file
$envFile = ".env"
$content = Get-Content $envFile -Raw

# Update VITE_STRIPE_PUBLISHABLE_KEY
$content = $content -replace 'VITE_STRIPE_PUBLISHABLE_KEY=.*', 'VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51QrNnwQrdL2kpvgORGJ3HlR6bGPDmFr0bQyuW7xPfq8L8X429C3IzJxB6T8CvV536FWkGk8hu1hJp5nSqqdQSHsg00xMbjUtNS'

Set-Content $envFile -Value $content -NoNewline
Write-Host "Frontend Stripe publishable key updated successfully!"

