# Folder Structure Refactor: From app/ to components/Layout/

## What Changed

Reorganized the folder structure to be more intuitive and avoid mixing Next.js patterns in a Vite app.

## Before (Confusing)
```
src/
├── app/
│   └── layout.tsx          # Mixed Next.js App Router pattern
├── pages/                  # Mixed Next.js Pages Router pattern
├── components/
└── routes/
```

## After (Clear)
```
src/
├── components/
│   └── Layout/
│       └── RootLayout.tsx  # Layout components grouped together
├── pages/                  # Page components
├── routes/                 # Routing configuration
├── utils/                  # Utility functions
└── hooks/                  # Custom React hooks
```

## Why This Is Better

1. **Intuitive**: "Where would I look for X?" has obvious answers
2. **No framework confusion**: Not copying Next.js patterns in a Vite app
3. **Clear separation**: layouts, pages, components have distinct purposes
4. **Scalable**: Easy to add more layouts, pages, or components
5. **Follows expectations**: Things are where you'd expect them to be

## Changes Made

1. **Moved**: `src/app/layout.tsx` → `src/components/Layout/RootLayout.tsx`
2. **Removed**: Empty `src/app/` directory
3. **Updated**: Import in `src/App.tsx` to use new location
4. **Updated**: Documentation to reflect new structure

## Files Updated

- `src/App.tsx` - Updated import path
- `docs/07-layout-architecture/adr.md` - Updated file paths
- `docs/07-layout-architecture/best-practices.md` - Updated examples
- `docs/07-layout-architecture/interview-guide.md` - Updated rationale
- `CLAUDE.md` - Added folder structure section

## Benefits

- **Clearer mental model**: Each folder has a single, obvious purpose
- **Easier navigation**: Files are where you'd expect them
- **No pattern mixing**: Clean separation from framework-specific patterns
- **Better scalability**: Structure grows naturally as app expands