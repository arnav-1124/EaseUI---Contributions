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
