# HubSpot Form Integration Setup Guide

## 🎯 Quick Setup (5 minutes)

### Step 1: Get Your HubSpot Form Details

1. **Log into HubSpot**
   - Go to https://app.hubspot.com

2. **Navigate to Forms**
   - Click **Marketing** → **Forms** in the left sidebar

3. **Find Your Form**
   - You should see the form with fields: Name, Email, Company, Phone number, Use case / Project description

4. **Get the Form ID**
   - Click on your form
   - Click **Actions** → **Share**
   - You'll see an embed code that looks like this:
   ```html
   <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
   <script>
     hbspt.forms.create({
       region: "na1",
       portalId: "12345678",    ← Copy this number
       formId: "abc123-def456"   ← Copy this ID
     });
   </script>
   ```

### Step 2: Add Environment Variables

Create a `.env.local` file in your project root (if it doesn't exist) and add:

```bash
# HubSpot Configuration
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your-portal-id-here
NEXT_PUBLIC_HUBSPOT_FORM_ID=your-form-id-here
NEXT_PUBLIC_HUBSPOT_REGION=na1
```

**Note:** Replace the values with your actual Portal ID and Form ID from Step 1.

**Region codes:**
- `na1` - North America
- `eu1` - Europe
- `ap1` - Asia Pacific

### Step 3: Deploy with Environment Variables

#### For Netlify:
1. Go to **Site Settings** → **Environment Variables**
2. Add these variables:
   - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`
   - `NEXT_PUBLIC_HUBSPOT_FORM_ID`
   - `NEXT_PUBLIC_HUBSPOT_REGION`

#### For Vercel:
1. Go to **Project Settings** → **Environment Variables**
2. Add the same variables as above

### Step 4: Test It Out

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Click any "Contact Sales" button on your site

3. The HubSpot form should load in the modal

4. Test a submission to make sure it appears in your HubSpot dashboard

## 🎨 Customization

### Change Modal Title/Description

```tsx
<HubSpotContactModal 
  title="Let's Talk"
  description="Share your project details and we'll respond within 24 hours"
/>
```

### Change Button Text

```tsx
<HubSpotContactModal 
  triggerText="Get Started"
/>
```

### Custom Button Styling

```tsx
<HubSpotContactModal 
  triggerClassName="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-white"
/>
```

## 🔧 Troubleshooting

### Form Not Loading?
- Check that your Portal ID and Form ID are correct
- Make sure environment variables start with `NEXT_PUBLIC_`
- Rebuild your application after adding environment variables

### Styling Issues?
- The form styling is in `app/globals.css` under `/* HubSpot Form Styling */`
- You can customize colors, spacing, etc. there

### Form Submissions Not Showing in HubSpot?
- Check your HubSpot form settings
- Make sure the form is published
- Check HubSpot's spam folder

## 🚀 What's Next?

Now you can:
1. Delete the old complex `ContactSalesModal.tsx` (optional)
2. Remove the API routes in `/app/api/contact/` if you're not using them (optional)
3. Remove `lib/hubspot.ts` (optional)

The new setup is much simpler and handles everything through HubSpot!

