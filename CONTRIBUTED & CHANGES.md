# Contributions & Changes

- **`Reason`**: Since this app doesn't take user's input for theme changing like choose from dropdown, etc. There's no need of these reducers and imports.
  - **`ThemeSlice.tsx`**: Removed reducer `setTheme`.
  - **`main.tsx`**: Removed the import line `setTheme` along with line no 19: `store.dispatch(setTheme(savedTheme));`

- **`Reason`**: Navbar should be a reusable UI-library component where the developer controls its content through `children`, rather than having fixed content inside the component.
  - **`Navbar.tsx`**:
    - Updated Navbar to render `{children}` instead of hardcoded logo, navigation links, and button.
    - Removed the unused `Button` import.
    - Added `gap-4` to improve spacing between Navbar children.
    - Updated the background styling to `bg-background/95` for a more polished appearance.
    - Improved the hover animation handler by safely checking `navbarRef.current` before applying the animation.
  - **`NavbarPage.tsx`**:
    - Updated the Navbar demonstration to pass custom children.
    - Updated the code preview to show the actual Navbar usage with `variant` and `size`.

- **`Reason`**: The dark theme was causing poor readability and inconsistent UI appearance because several application surfaces were using hardcoded light-theme colors.
  - **`index.css`**:
    - Added dark-theme CSS variables for background, text, primary, and card colors.
    - Added theme-aware body background and text colors.
    - Added transitions for smoother theme switching.
  - **`CodeBlock.tsx`**:
    - Updated the code preview area from a light background to a dark code-editor style.
    - Changed the code background from `bg-gray-50` to `bg-gray-950`.
    - Changed the code border from `border-gray-200` to `border-gray-800`.
    - Changed the code text from `text-gray-800` to `text-gray-100`.
    - Kept the code block intentionally dark in both application themes for better readability and consistency with documentation/code-editor conventions.
