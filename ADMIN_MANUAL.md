# Khojbeen Website - Content Management Manual

Welcome to the Content Management Manual for the **Khojbeen** Ghost theme. This guide is designed for non-technical administrators to easily manage, update, and create content using the Ghost Admin Panel.

---

## 1. Getting Started: Accessing the Admin Panel
To manage your website, log in to your Ghost Admin dashboard by navigating to `khojbeenmandali.in/ghost` in your web browser. Enter your email and password to access the panel.

## 2. Managing Pages & Custom Layouts
This theme comes with several pre-designed **Custom Templates** specifically tailored for the Khojbeen website. A "Page" in Ghost is static content (like About, Contact, or a specific landing page).

### How to Create a Page with a Custom Template:
1. In the left-hand menu, click on **Pages**.
2. Click the **New page** button in the top right corner.
3. Add your Title and content.
4. Open the **Page Settings** menu by clicking the gear icon (⚙️) in the top right corner.
5. Scroll down to the **Template** dropdown menu.
6. Select the appropriate template for your page. Choose from:
   - **Custom About**: Use this for the "About Us" page.
   - **Custom Blog**: Use this for the main blog/news listing page.
   - **Custom Donation**: Use this for the donation or support page.
   - **Custom Resources**: Use this for a resources or downloads library page.
   - **Custom Work**: Use this for a portfolio or main projects listing page.
   - **Custom Work Details**: Use this for specific project/work case study pages.
7. Click **Publish** (or Update). 

## 3. Creating and Managing Blog Posts
Posts are used for dynamic content like news, updates, or articles.

### How to Create a New Post:
1. In the left-hand menu, click on **Posts**.
2. Click **New post**.
3. Enter your title and write your content in the editor. You can use the `+` button in the editor to add images, dividers, buttons, and other formatting.
4. Open the **Post Settings** (⚙️ gear icon):
   - **URL/Slug**: This generates automatically, but you can change it.
   - **Publish Date**: Set it to publish now or schedule it for the future.
   - **Tags**: Assign tags (e.g., "News", "Update") to organize your posts. This is crucial for filtering posts on the website.
   - **Feature Image**: Upload a high-quality image. This will represent the post on the homepage and blog listing pages.
   - **Excerpt**: Write a short 1-2 sentence summary of the post.
5. Once ready, click **Publish** at the top right.

## 4. Managing Navigation (Menus)
You can easily control the links in your website's header (menu) and footer directly from the Admin Panel.

1. Go to **Settings** (gear icon at the bottom left) > **Navigation** (or **Site > Navigation** depending on the Ghost version).
2. **Primary Navigation**: This controls your main header menu. 
   - Add the label (e.g., "About") and the link (e.g., `khojbeenmandali.in/about/`).
   - Drag and drop the items to reorder them.
3. **Secondary Navigation**: This often controls the footer links.
4. Click **Save** when you are done.

## 5. General Site Settings
To change basic information about your website:
1. Go to **Settings** > **General**.
2. Here you can update:
   - **Title & Description**: The name of your site and a short bio.
   - **Site timezone**: Ensure this matches your local time for accurate post scheduling.
   - **Publication icon / Logo**: Upload your brand logos here.
   - **Social Accounts**: Link your Facebook, Twitter/X, etc.

## 6. Understanding and Using Tags

Tags are critical in this theme as they dictate **where** your content (posts, team members, resources) shows up on the website. 

### Public vs. Internal Tags
- **Public Tags** (e.g., `blog`, `work`): Visible to visitors on your site. Just type the word in the tags field.
- **Internal Tags** (e.g., `#mentors`, `#partner`): Used for organizing content behind the scenes. They begin with a hashtag (`#`) and do not show up publicly to visitors, but the theme uses them to place content securely in the right sections.

### Complete Tag Directory

Here is the complete list of tags used by the Khojbeen theme and where they belong:

#### **Homepage Tags (Internal)**
Use these tags on posts/items you want to appear on the front page:
- **`#home-posts`**: General blog posts or news items you want featured on the homepage.
- **`#home-work-posts`**: Portfolio or project highlights you want featured on the homepage's work section.
- **`#partner`**: Organizations/logos to display in the "Partners" section.
- **`#techpartner`**: Organizations/logos to display in the "Tech Partners" section.
- **`#patron`**: Individuals/entities to display in the "Patrons" section.

#### **About Page Tags (Internal)**
Use these tags to populate the sections of the "About Us" page:
- **`#strategic-team`**: Add to a post representing a team member to show them in the "Strategic Team" section.
- **`#mentors`**: Add to a post representing a mentor to show them in the "Mentors" section.
- **`#about-tools`**: Add to posts/items detailing tools or approaches used by the organization.

#### **Main Pages Tags (Public & Internal)**
- **`blog`** *(Public)*: Add this to any standard news or article post to have it appear on the main Blog page.
- **`work`** *(Public)*: Add to case studies or project posts to have them listed on the main Work/Portfolio page.
- **`#resource`** *(Internal)*: Add to posts that contain downloadable materials or links to appear on the Resources page.
- **`#donation-method`** *(Internal)*: Add to posts defining donation tiers or options to appear on the Donation page.

#### **Dynamic Work Details Tag (Internal)**
- **`#<page-slug>`**: Used specifically for the "Custom Work Details" template. If you have a main work page with the URL slug `my-project`, you can create sub-posts and tag them with `#my-project`. The theme will automatically pull those tagged posts into that specific project detail page.

## 7. Tips for Success
- **Images:** Always try to use compressed images (JPEG or WebP format) to keep your website loading quickly.
- **Excerpts:** Always write a custom excerpt for your posts and pages; it helps with SEO and looks better on social media.
- **Preview:** Use the "Preview" button in the top right of the editor to see how your post or page will look on Desktop and Mobile before publishing.
- **Canonical URL:** Some links like Linkedin links of People are put in Canonical URL ( Post Creation side panel > META Data > Canonial URL ).
- **Preview:** Use the "Preview" button in the top right of the editor to see how your post or page will look on Desktop and Mobile before publishing.
