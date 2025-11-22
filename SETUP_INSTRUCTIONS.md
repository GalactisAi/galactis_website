# 🚀 Quick Setup - HubSpot Form Integration

## ✅ Step 1: Create Environment File

Create a file named `.env.local` in the root of your project with this content:

```bash
# HubSpot Configuration
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=244419566
NEXT_PUBLIC_HUBSPOT_FORM_ID=6c799ea3-a0a4-45b4-9b2b-ce89d117aa4d
NEXT_PUBLIC_HUBSPOT_REGION=na2
```

**How to create it:**

```bash
# In your terminal, run:
cat > .env.local << 'EOF'
# HubSpot Configuration
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=244419566
NEXT_PUBLIC_HUBSPOT_FORM_ID=6c799ea3-a0a4-45b4-9b2b-ce89d117aa4d
NEXT_PUBLIC_HUBSPOT_REGION=na2
EOF
```

Or manually create the file using your code editor.

## ✅ Step 2: Test Locally

```bash
# Restart your dev server (important!)
npm run dev
```

Then go to: http://localhost:3000/contact

Click "Contact Sales Team" - your HubSpot form should load in the modal!

## ✅ Step 3: Deploy

Before deploying, add these environment variables to your hosting platform:

### For Netlify:
1. Go to **Site Settings** → **Environment Variables**
2. Click **Add a variable**
3. Add these three:
   - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` = `244419566`
   - `NEXT_PUBLIC_HUBSPOT_FORM_ID` = `6c799ea3-a0a4-45b4-9b2b-ce89d117aa4d`
   - `NEXT_PUBLIC_HUBSPOT_REGION` = `na2`

### For Vercel:
1. Go to **Project Settings** → **Environment Variables**
2. Add the same three variables

## 🎉 That's It!

Your HubSpot form is now connected. Every "Contact Sales" button on your site will open a modal with your HubSpot form.

The form will automatically:
- ✅ Load your HubSpot form with all your fields
- ✅ Submit directly to your HubSpot CRM
- ✅ Track conversions in your analytics
- ✅ Match your website's design (dark mode included!)

## 💡 Where to Use the Button

The button is already on your `/contact` page. To add it to other pages:

```tsx
import HubSpotContactModal from "@/components/HubSpotContactModal";

export default function MyPage() {
  return (
    <div>
      <HubSpotContactModal triggerText="Get Started" />
    </div>
  );
}
```

See `HUBSPOT_USAGE_EXAMPLES.md` for more examples!

