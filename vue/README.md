# Vue Components

This directory contains Vue versions of the React components from the `react` directory. Each component is designed to be reusable and maintain the same style classes as its React counterpart.

## Components

Below is a list of the converted components and their documentation.

### Accordion

An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.

**Props**

- `type`: `single` or `multiple`. Determines whether one or multiple items can be opened at the same time.
- `collapsible`: `boolean`. When `type` is `single`, allows closing the currently open item.
- `defaultValue`: `string` or `string[]`. The value of the item(s) to be open by default.
- `v-model`: `string` or `string[]`. The controlled value of the item(s) to be open.

**Slots**

- `default`: The content of the accordion, which should be `AccordionItem` components.

### Alert

Displays a callout for user attention.

**Props**

- `variant`: `default` or `destructive`. The variant of the alert.

**Slots**

- `default`: The content of the alert.

### Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

**Props**

- `open`: `boolean`. The controlled open state of the dialog.
- `defaultOpen`: `boolean`. The open state of the dialog when it is initially rendered.
- `modal`: `boolean`. The modality of the dialog. When set to `true`, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.

**Slots**

- `default`: The content of the alert dialog, which should include `AlertDialogTrigger`, `AlertDialogContent`, etc.

### Aspect Ratio

Displays content within a desired ratio.

**Props**

- `ratio`: `number`. The desired aspect ratio.

**Slots**

- `default`: The content to be displayed within the aspect ratio.

### Avatar

An image element with a fallback for representing the user.

**Slots**

- `default`: The content of the avatar, which should be `AvatarImage` and `AvatarFallback` components.

### Badge

Displays a badge or a component that looks like a badge.

**Props**

- `variant`: `default`, `secondary`, `destructive`, or `outline`. The variant of the badge.

**Slots**

- `default`: The content of the badge.

### Breadcrumb

Displays a breadcrumb navigation.

**Slots**

- `default`: The content of the breadcrumb, which should be `BreadcrumbItem` components.

### Button

Displays a button or a link with button styling.

**Props**

- `variant`: `default`, `destructive`, `outline`, `secondary`, `ghost`, or `link`. The variant of the button.
- `size`: `default`, `sm`, `lg`, or `icon`. The size of the button.
- `asChild`: `boolean`. Whether to render the component as a child of its slot.

**Slots**

- `default`: The content of the button.

### Sidebar

Displays a sidebar navigation.

**Props**

- `side`: `left` or `right`. The side of the screen where the sidebar should appear.
- `size`: `default`, `sm`, `lg`, `xl`, or `full`. The width of the sidebar.
- `absolute`: `boolean`. Whether the sidebar should be positioned absolutely.
- `noOverlay`: `boolean`. Whether to hide the overlay.
- `open`: `boolean`. The controlled open state of the sidebar.

**Slots**

- `default`: The content of the sidebar.
