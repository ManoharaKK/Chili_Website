# Repository Size Optimization Guide

## Issue Summary

The repository is approximately **26 MB** in size, causing slow cloning (user reported cancelling after 4% download at 419 KB/s).

### Large Files Identified:
1. `public/Videos/Section02/SectionTwo.mp4` - **14 MB** (largest file)
2. `public/Videos/Section02/Section02secondimage.mp4` - **4.0 MB**
3. `public/Images/Home/Section02/Middleimage.png` - **2.8 MB**
4. `public/Images/Home/Section08/Product.png` - **1.9 MB**
5. `public/Images/Home/Section06/Section06.png` - **1.2 MB**
6. Other PNG images - **~2 MB**
7. `.DS_Store` files - **20 KB** (should not be committed)

**Total large media files: ~26 MB**

## Immediate Solution for Users

Users experiencing slow clones can use a shallow clone:

```bash
git clone --depth 1 https://github.com/chamika-damith/Chili_Website.git
```

This downloads only the latest commit without git history, reducing clone time significantly.

## Recommended Solutions for Repository Owner

### Option 1: Use Git LFS (Best for Long-term)

Git Large File Storage (LFS) replaces large files with pointers in Git.

**Setup steps:**

1. Install and initialize Git LFS:
   ```bash
   git lfs install
   ```

2. Configure LFS tracking:
   ```bash
   git lfs track "*.mp4"
   git lfs track "*.png"
   git add .gitattributes
   ```

3. Migrate existing files:
   ```bash
   # Remove from cache but keep files
   git rm --cached public/Videos/**/*.mp4
   git rm --cached public/Images/**/*.png
   
   # Re-add (will be tracked by LFS)
   git add public/Videos/**/*.mp4
   git add public/Images/**/*.png
   
   # Commit
   git commit -m "Migrate media files to Git LFS"
   git push
   ```

4. Update README to document Git LFS requirement for clones

**Benefits:**
- Future media commits are small (only pointers, ~130 bytes)
- Better git performance
- Standard solution for large files in git

**Note:** Historical files remain in git history. Complete cleanup requires `git lfs migrate` and force-push.

### Option 2: Move to CDN (Best for Production)

Host large media files on a CDN instead of in the repository.

**Recommended services:**
- **Cloudinary** (Free tier: 25 GB storage, 25 GB bandwidth/month)
- **Vercel Blob Storage** (integrated with Vercel deployment)
- **AWS S3 + CloudFront**
- **GitHub Releases** (attach files as release assets)

**Steps:**
1. Upload videos and images to CDN
2. Update video/image references in code:
   ```tsx
   // Before
   <video src="/Videos/Section02/SectionTwo.mp4" />
   
   // After  
   <video src="https://cdn.example.com/videos/SectionTwo.mp4" />
   ```

3. Remove files from repository:
   ```bash
   git rm -r public/Videos/
   git rm public/Images/Home/Section02/Middleimage.png
   git rm public/Images/Home/Section04/*.png
   git rm public/Images/Home/Section06/Section06.png
   git rm public/Images/Home/Section08/Product.png
   git commit -m "Move large media to CDN"
   ```

**Benefits:**
- Repository size: 26 MB → **< 1 MB**
- Faster page loads (CDN edge caching)
- Production-ready solution
- No special git tools needed

### Option 3: Optimize Media Files (Quick Win)

Compress existing files without changing architecture.

**For videos (use ffmpeg):**
```bash
# Install ffmpeg
brew install ffmpeg  # macOS
apt-get install ffmpeg  # Ubuntu

# Compress video
ffmpeg -i public/Videos/Section02/SectionTwo.mp4 \
       -c:v libx264 -crf 28 -preset slow \
       -c:a aac -b:a 128k \
       public/Videos/Section02/SectionTwo_optimized.mp4

# Replace original
mv public/Videos/Section02/SectionTwo_optimized.mp4 \
   public/Videos/Section02/SectionTwo.mp4
```

**For images (use pngquant or ImageOptim):**
```bash
# Install pngquant
brew install pngquant  # macOS

# Optimize (lossy compression, 65-80% quality)
pngquant --quality=65-80 --ext .png --force public/Images/**/*.png

# Or use ImageOptim GUI on macOS
```

**Expected size reduction:**
- Videos: 18 MB → ~7-9 MB (50-60% smaller)
- Images: 7.8 MB → ~3-4 MB (50% smaller)
- **Total: 26 MB → ~10-13 MB**

**Benefits:**
- Simple, no architecture changes
- Can be done immediately
- Combine with other options later

### Option 4: Clean Up .DS_Store Files

These Mac system files should not be in the repository.

```bash
# Remove from git
git rm --cached .DS_Store src/.DS_Store

# Ensure .gitignore blocks them (already configured)
grep ".DS_Store" .gitignore

# Commit
git commit -m "Remove .DS_Store files from repository"
```

## Recommended Action Plan

**Phase 1 - Immediate (Do Today):**
1. ✅ Document the issue (this file)
2. ✅ Update README with shallow clone recommendation
3. Remove `.DS_Store` files from git tracking
4. Optimize media files (50% size reduction)

**Phase 2 - Short-term (Next Week):**
1. Set up Git LFS for future media files
2. Add pre-commit hook to prevent large file commits
3. Document media optimization workflow

**Phase 3 - Long-term (Production):**
1. Migrate all media to CDN (Cloudinary or Vercel Blob)
2. Update all media references in components
3. Remove large files from repository
4. Repository size: **< 1 MB**

## Files in This PR

This PR addresses the issue with:

1. **REPOSITORY_SIZE.md** - This comprehensive guide
2. **README.md** - Updated with:
   - Shallow clone recommendation (highlighted at top)
   - Link to this optimization guide
   - Notice about repository size
3. **.DS_Store removal** - Clean up Mac system files

## Testing Shallow Clone

To verify the shallow clone improvement:

```bash
# Time a full clone
time git clone https://github.com/chamika-damith/Chili_Website.git full-clone

# Time a shallow clone  
time git clone --depth 1 https://github.com/chamika-damith/Chili_Website.git shallow-clone

# Compare sizes
du -sh full-clone/.git
du -sh shallow-clone/.git
```

Expected results:
- Full clone: ~26 MB
- Shallow clone: ~26 MB (but faster download, less processing)

**Note:** Shallow clone still downloads large files but skips git history, making the clone faster.

## Next Steps for Repository Owner

After merging this PR, consider implementing:

1. **Immediate:** Optimize media files (Option 3) - 2 hours work, 50% size reduction
2. **Soon:** Set up Git LFS (Option 1) - 1 hour setup, helps with future files  
3. **Eventually:** Move to CDN (Option 2) - 4-6 hours work, best long-term solution

Each option can be implemented independently or combined for maximum effect.
