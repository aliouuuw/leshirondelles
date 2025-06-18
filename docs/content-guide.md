# Content Authoring Guide

This guide provides instructions on how to structure content in Sanity Studio to build pages with rich, dynamic layouts.

## Understanding the Page Builder

For pages like "Programs", we use a "Page Builder" pattern. Instead of having a single large text field for all the page content, the page is constructed from a series of different "blocks" or "sections". Each block has a specific purpose and a unique set of fields.

This approach gives you the flexibility to create complex and visually appealing layouts directly from the Studio, without needing to change any code.

### Available Blocks for Program Pages

When you edit a Program in the Studio, you will see a field called **"Page Sections"**. This is the Page Builder. You can add, remove, and reorder different blocks within it. Here are the most common blocks you will use for Program pages:

1.  **Hero Section (`block.hero`)**: This should be the first block on your page. It contains fields for the subtitle, description, key stats (like hours and class size), a callout box, and the main hero image.

2.  **Class Level Tiers (`block.classLevelTiers`)**: Use this block to create a grid of "classes" or "age groups" (e.g., Petite Section, Moyenne Section, Grande Section for Preschool).
    *   **Title/Description**: You can give the whole section a title like "Nos Classes".
    *   **Levels**: Each item in the list represents a card in the grid. You can add an image, title, age range, and key features for each level.

3.  **Feature Grid (`block.featureGrid`)**: This block is perfect for showcasing activities, program features, or key values in a grid format.
    *   **Title/Description**: You can give the section a title like "Nos Activités".
    *   **Features**: Each item here will be a card with an icon, title, and description.

4.  **Schedule (`block.schedule`)**: Use this to display a daily or weekly schedule. It creates a clean, table-like layout.

5.  **Rich Text (`block`)**: For any standard text content like paragraphs, headings, or lists that don't fit into the structured blocks above, you can use the generic `block` type.

## How to Fix the Program Page Layout

The current layout issue is likely because the detailed content of the program (like the age groups and activities) has been entered into a simple text field instead of being built with the Page Builder blocks.

**To fix this, please follow these steps in your Sanity Studio:**

1.  Navigate to the "Program" section and open the program you want to edit.
2.  Locate the **"Page Sections"** field.
3.  Instead of putting all content in one text area, click "Add item" and choose the appropriate block from the list.
    *   For the section with age groups, choose **"Class Level Tiers"**. Fill in the title and then add each class level as an item in the "Levels" list.
    *   For the activities section, choose **"Feature Grid"**. Fill in the title and add each activity as an item in the "Features" list.
4.  You can re-arrange the blocks by dragging and dropping them.
5.  Once you have moved your content into these structured blocks, **Save and Publish** your changes.

By using the Page Builder correctly, your program pages will automatically get the intended layout and styling. 