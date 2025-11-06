#!/bin/bash

# Script to organize IMOG images from img folder to respective category folders

SOURCE_DIR="public/images/imog/img"
HERO_DIR="public/images/imog/hero-pack"
HACKERS_DIR="public/images/imog/hackers"
DEVELOPERS_DIR="public/images/imog/developers"
GYM_DIR="public/images/imog/gym-heavy-bulk"
STREET_DIR="public/images/imog/street-og-night-city"

# Get all image files (excluding README)
cd "$(dirname "$0")/../.."
files=($(ls -1 "$SOURCE_DIR"/*.{png,jpg,jpeg,webp} 2>/dev/null | grep -v README))

# Organize: First 8 for hero-pack
counter=1
for i in {0..7}; do
  if [ $i -lt ${#files[@]} ]; then
    filename=$(basename "${files[$i]}")
    ext="${filename##*.}"
    newname="hero-$(printf "%02d" $counter).${ext}"
    cp "${files[$i]}" "$HERO_DIR/$newname"
    echo "Copied: $newname"
    ((counter++))
  fi
done

# Next 6 for hackers
counter=1
for i in {8..13}; do
  if [ $i -lt ${#files[@]} ]; then
    filename=$(basename "${files[$i]}")
    ext="${filename##*.}"
    newname="hackers-$(printf "%02d" $counter).${ext}"
    cp "${files[$i]}" "$HACKERS_DIR/$newname"
    echo "Copied: $newname"
    ((counter++))
  fi
done

# Next 6 for developers
counter=1
for i in {14..19}; do
  if [ $i -lt ${#files[@]} ]; then
    filename=$(basename "${files[$i]}")
    ext="${filename##*.}"
    newname="developers-$(printf "%02d" $counter).${ext}"
    cp "${files[$i]}" "$DEVELOPERS_DIR/$newname"
    echo "Copied: $newname"
    ((counter++))
  fi
done

# Next 6 for gym-heavy-bulk
counter=1
for i in {20..25}; do
  if [ $i -lt ${#files[@]} ]; then
    filename=$(basename "${files[$i]}")
    ext="${filename##*.}"
    newname="gym-heavy-$(printf "%02d" $counter).${ext}"
    cp "${files[$i]}" "$GYM_DIR/$newname"
    echo "Copied: $newname"
    ((counter++))
  fi
done

# Next 8 for street-og-night-city
counter=1
for i in {26..33}; do
  if [ $i -lt ${#files[@]} ]; then
    filename=$(basename "${files[$i]}")
    ext="${filename##*.}"
    newname="street-og-$(printf "%02d" $counter).${ext}"
    cp "${files[$i]}" "$STREET_DIR/$newname"
    echo "Copied: $newname"
    ((counter++))
  fi
done

echo "Organization complete!"

