# Khojbeen Website Theme

A custom Ghost theme designed for the Khojbeen NGO website.

## Overview

This is a Ghost theme built specifically for Khojbeen, featuring custom templates for different page types including about, blog, resources, and work sections.

## Requirements

- Ghost >= 5.0.0

## Installation

1. Clone or download this repository
2. Navigate to your Ghost installation's `content/themes` directory
3. Place this theme folder in the themes directory
4. Restart Ghost
5. Go to your Ghost Admin panel → Settings → Design
6. Select "Khojbeen Website" theme and click "Activate"

## Theme Structure

```
khojbeen-website/
├── assets/              # Static assets (CSS, JS, images)
├── partials/           # Reusable template partials
├── custom-about.hbs    # Custom about page template
├── custom-blog.hbs     # Custom blog page template
├── custom-resources.hbs # Custom resources page template
├── custom-work.hbs     # Custom work page template
├── default.hbs         # Default page layout
├── index.hbs           # Homepage template
├── page.hbs            # Standard page template
├── post.hbs            # Blog post template
└── package.json        # Theme configuration
```

## Features

- Custom page templates for specialized content sections
- Responsive image sizing (xxs to xl)
- 5 posts per page configuration
- Card assets enabled
- Custom styling for NGO content

## Configuration

The theme includes the following configuration settings in `package.json`:

- **Posts per page**: 5
- **Card assets**: Enabled
- **Image sizes**: Multiple responsive sizes from 30px to 2000px width

## Custom Templates

This theme includes several custom page templates:

- **custom-about.hbs**: For the about page
- **custom-blog.hbs**: For the blog listing page
- **custom-resources.hbs**: For the resources page
- **custom-work.hbs**: For showcasing work/projects

To use a custom template, select it in the page settings within Ghost Admin.

## Development

To work on this theme:

1. Make your changes to the template files
2. Test in a local Ghost installation
3. Restart Ghost to see changes (or use `ghost restart` in development mode)

## Author

**Godly K Mathews**

- Email: work.godlykm@gmail.com
- Website: https://godly.is-a.dev

## License

MIT License

## Support

For issues, questions, or contributions, please contact the theme author.
