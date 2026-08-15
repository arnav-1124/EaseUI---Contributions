# Contributions & Changes

- **`Reason`**: Since this app doesn't take user's input for theme changing like choose from dropdown, etc. There's no need of these reducers and imports.
  - **`ThemeSlice.tsx`**: Removed reducer `setTheme`.
  - **`main.tsx`**: Removed the import line `setTheme` along with line no 19: `store.dispatch(setTheme(savedTheme));`
