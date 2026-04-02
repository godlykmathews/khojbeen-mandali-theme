# Khojbeen Mandali Website

![Khojbeen Preview](https://github.com/user-attachments/assets/8bc14653-ea3a-40fe-95b1-3686694de48a)

A custom, dynamic Ghost theme built specifically for the NGO **Khojbeen Mandali**.

This project was developed during the **OASIS event** organized by the **Tech4Good Community**. Our goal was to create an impactful, easy-to-manage, and fully customizable platform to help Khojbeen Mandali showcase its resources, ongoing work, and blogs to the world.

---

## 🌟 Features

- **Custom Page Templates**: Specialized designs for About, Blog, Resources, Work, and Work Details `(custom-about.hbs`, `custom-blog.hbs`, etc.).
- **Dynamic Footer & Social Connections**: Fully dynamic footer that allows configuring Contact Information (Phone, Email, Person) and Illustration Credits right from the Ghost Admin panel.
- **Secondary Navigation for Socials**: Add social media links (Instagram, LinkedIn, etc.) via Ghost's secondary navigation, with automatic icon fetching!
- **Responsive Design**: Tailored image sizing (xxs to xl) and Tailwind CSS integration for a fully responsive mobile & desktop experience.
- **Custom Styling**: NGO-specific focus, clean styling, and 5 posts-per-page pagination.

## 🛠️ Requirements

- **Ghost** `^5.0.0`
- **Node.js** `v22` (Managed via `nvm`)

## 🚀 Installation & Setup

1. **Clone the Repository**
   Download or clone this theme inside your Ghost installation's themes directory:
   ```bash
   cd content/themes
   git clone <repository_url> khojbeen-website
   ```

2. **Restart Ghost**
   To load the theme and apply the Custom Configurations:
   ```bash
   ghost restart
   ```

3. **Activate the Theme**
   Go to your **Ghost Admin Panel** → **Settings** → **Design & Branding** → **Change Theme** → Select "Khojbeen Website" and click **Activate**.

## 🎨 Customizing the Theme (Admin Panel)

Thanks to the dynamic integration, you no longer need to edit the code to change vital site information!

**1. Contact Information & Credits**
Navigate to **Settings** > **Design & Branding** > **Site Wide**. Here you can change:
- **Illustrations Author** (Name of the artist)
- **Illustrations Link** (URL to the artist's portfolio/LinkedIn)
- **Contact Phone** & **Contact Person**
- **Contact Email**

**2. Social Media Links**
Navigate to **Settings** > **Navigation** > **Secondary Navigation**.
- Add the name of the platform as the **Label** (e.g., `Instagram` or `LinkedIn`).
- Add the link to the profile as the **URL**.
- *Note*: Naming the label "Instagram" or "LinkedIn" automatically grabs the matching logo for the footer!

## 📁 Theme Structure

```text
khojbeen-website/
├── assets/              # CSS (Tailwind), JS, and Images
├── partials/            # Reusable templates (navigation.hbs, site-footer.hbs)
├── custom-about.hbs     # About page template
├── custom-blog.hbs      # Blog layout
├── custom-donation.hbs  # Donation page template
├── custom-resources.hbs # Resources page template
├── custom-work.hbs      # Work showcase template
├── default.hbs          # Global base layout
├── index.hbs            # Homepage template
├── page.hbs             # Standard static page layout
├── post.hbs             # Individual blog post layout
└── package.json         # Theme configuration & Ghost CMS settings
```

## 💖 Acknowledgements

* **Khojbeen Mandali** - For the amazing work they do and for allowing us to contribute to their digital presence.
* **Tech4Good Community** - For organizing the OASIS event and bringing developers together for social impact.
* **Bansi** - For the beautiful illustrations provided for the theme.

## 👨‍💻 Author

**Godly K Mathews**
- Email: work.godlykm@gmail.com
- Website: https://godly.is-a.dev

## 📝 License

This project is licensed under the MIT License.
